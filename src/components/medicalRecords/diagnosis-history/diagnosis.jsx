import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./diagnosisHistory.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const DiagnosisHistory = ({ patients }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [filter, setFilter] = useState("Last 6 Months"); // Default filter

  useEffect(() => {
    if (patients && patients.length > 0) {
      setPatient(patients[id]);
    }
  }, [id, patients]);

  // Function to filter diagnosis history based on the selected filter
  const filterDiagnosisHistory = () => {
    if (!patient || !patient.diagnosis_history) return [];

    const currentDate = new Date();
    const filteredHistory = patient.diagnosis_history.filter((diagnosis) => {
      const diagnosisDate = new Date(
        `${diagnosis.year}-${
          new Date(Date.parse(diagnosis.month + " 1, 2024")).getMonth() + 1
        }-01`
      );

      if (filter === "Last 6 Months") {
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 11);
        return diagnosisDate >= sixMonthsAgo;
      } else if (filter === "2022") {
        return diagnosisDate.getFullYear() === 2022;
      } else if (filter === "2023") {
        return diagnosisDate.getFullYear() === 2023;
      } else if (filter === "2024") {
        return diagnosisDate.getFullYear() === 2024;
      } else {
        return true; // Show all data if "All" is selected
      }
    });

    return filteredHistory;
  };

  const DATA_COUNT = 6;
  const filteredHistory = filterDiagnosisHistory();
  const labels = filteredHistory.map(
    (diagnosis) => `${diagnosis.month} ${diagnosis.year}`
  );
  const systolicData = filteredHistory.map(
    (diagnosis) => diagnosis.blood_pressure.systolic.value
  );
  const diastolicData = filteredHistory.map(
    (diagnosis) => diagnosis.blood_pressure.diastolic.value
  );

  // Define some sample chart colors
  const CHART_COLORS = {
    red: "#C26EB4",
    blue: "#7E6CAB",
  };

  // Define months array manually
  const months = Array.from({ length: DATA_COUNT }, (_, i) => `Month ${i + 1}`);

  const config = {
    data: {
      labels: labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicData,
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS.red,
          tension: 0.4, // Adjust this value for more or less curve
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS.blue,
          tension: 0.4, // Adjust this value for more or less curve
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
        },
      },
      scales: {
        y: {
          min: 60,
          max: 180,
        },
      },
    },
  };

  const graphStyle = {
    minHeight: "10rem",
    maxWidth: "540px",
    width: "100%",
    padding: "0.5rem",
  };

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="diagnosisHistory">
      <h2>Diagnosis History</h2>
      {filterDiagnosisHistory().length > 0 ? (
        <>
        <div style={graphStyle}>
        <h3>Bloood Pressure</h3>
        <div className="filter-container">
          <select
            id="timeRange"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <Line data={config.data} options={config.options} />
        <ul>
          <li>
            Systolic: {filteredHistory[0].blood_pressure.systolic.value} (
            {filteredHistory[0].blood_pressure.systolic.levels})
          </li>
          <li>
            Diastolic: {filteredHistory[0].blood_pressure.diastolic.value} (
            {filteredHistory[0].blood_pressure.diastolic.levels})
          </li>
        </ul>
      </div>

      <div>
        <div className="medical-rate">
          <div>
            <img src="" alt="Respiratory" />
            <p>Respiratory Rate</p>
            <p>{filteredHistory[0].respiratory_rate.value}&nbsp;bpm</p>
            <p>{filteredHistory[0].respiratory_rate.levels}</p>
          </div>
          <div>
            <img src="" alt="Temperature" />
            <p>Temperature</p>
            <p>{filteredHistory[0].temperature.value}&deg;F</p>
            <p>{filteredHistory[0].temperature.levels}</p>
          </div>
          <div>
            <img src="" alt="Heart" />
            <p>Heart Rate</p>
            <p>{filteredHistory[0].heart_rate.value}&nbsp;bpm</p>
            <p>{filteredHistory[0].heart_rate.levels}</p>
          </div>
        </div>
      </div>
        </>
      ) : (
        <p>No diagnosis history available.</p>
      )}
      
    </div>
  );
};

export default DiagnosisHistory;
