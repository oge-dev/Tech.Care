import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./diagnosisHistory.css";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register the necessary components
Chart.register(...registerables);

const DiagnosisHistory = ({ patients }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [filter, setFilter] = useState("Last 6 Months"); // Default filter

  useEffect(() => {
    if (patients && patients.length > 0) {
      setPatient(patients[id]);
    }
  }, [id, patients]);

  const filterDiagnosisHistory = () => {
    if (!patient || !patient.diagnosis_history) return [];

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

  const filteredHistory = filterDiagnosisHistory();

  // Ensure that filteredHistory is not empty before accessing its properties
  if (!filteredHistory.length) return <p>No diagnosis history available.</p>;

  const labels = filteredHistory.map(
    (diagnosis) => `${diagnosis.month.slice(0, 3)}, ${diagnosis.year}`
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

  const config = {
    data: {
      labels: labels,
      datasets: [
        {
          label: `Systolic`,
          data: systolicData,
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS.red,
          tension: 0.4, // Adjust this value for more or less curve
          fill: false,
          pointBackgroundColor: CHART_COLORS.red,
        },
        {
          label: `Diastolic`,
          data: diastolicData,
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS.blue,
          tension: 0.4, // Adjust this value for more or less curve
          fill: false,
          pointBackgroundColor: CHART_COLORS.blue,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          min: 60,
          max: 180,
          ticks: {
            stepSize: 20,
            color: "#858585",
          },
          grid: {
            color: "#E8E8E8",
          },
        },
        x: {
          ticks: {
            color: "#858585",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  return (
    <div className="diagnosisHistory">
      <h2>Diagnosis History</h2>
      <div className="chart-container">
        <div className="chart">
          <div className="diagnosisHistory-header">
            <h3>Blood Pressure</h3>
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
        </div>

        <div className="legend">
          <div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: CHART_COLORS.red,
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              ></span>
              <span>Systolic</span>
            </div>

            <div>{filteredHistory[0].blood_pressure.systolic.value}</div>
            <div>{filteredHistory[0].blood_pressure.systolic.levels}</div>
          </div>
          <div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: CHART_COLORS.blue,
                  marginRight: "5px",
                  borderRadius: "50%",
                }}
              ></span>
              <span>Diastolic</span>
            </div>

            <div>{filteredHistory[0].blood_pressure.diastolic.value}</div>
            <div>{filteredHistory[0].blood_pressure.diastolic.levels}</div>
          </div>
        </div>
      </div>

      <div className="medical-rates">
        <div className="rate">
          <div className="icon respiratory"></div>
          <div className="rate-details">
            <p className="rate-title">Respiratory Rate</p>
            <p className="rate-value">
              {filteredHistory[0].respiratory_rate.value} bpm
            </p>
            <p className="rate-status">Normal</p>
          </div>
        </div>
        <div className="rate">
          <div className="icon temperature"></div>
          <div className="rate-details">
            <p className="rate-title">Temperature</p>
            <p className="rate-value">
              {filteredHistory[0].temperature.value}°F
            </p>
            <p className="rate-status">Normal</p>
          </div>
        </div>
        <div className="rate">
          <div className="icon heart"></div>
          <div className="rate-details">
            <p className="rate-title">Heart Rate</p>
            <p className="rate-value">
              {filteredHistory[0].heart_rate.value} bpm
            </p>
            <p className="rate-status">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
