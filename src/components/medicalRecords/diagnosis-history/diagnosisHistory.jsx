import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./diagnosisHistory.css";

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

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="diagnosisHistory">
      <h2>Diagnosis History</h2>
      <div className="filter-container">
        <label htmlFor="timeRange">Select Time Range:</label>
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
      {filterDiagnosisHistory().length > 0 ? (
        filterDiagnosisHistory().map((diagnosis, diagIndex) => (
          <div key={diagIndex}>
            <h4>
              {diagnosis.month} {diagnosis.year}
            </h4>
            <ul>
              <li>
                Systolic: {diagnosis.blood_pressure.systolic.value} (
                {diagnosis.blood_pressure.systolic.levels})
              </li>
              <li>
                Diastolic: {diagnosis.blood_pressure.diastolic.value} (
                {diagnosis.blood_pressure.diastolic.levels})
              </li>
            </ul>
            <p>
              Respiratory Rate: {diagnosis.respiratory_rate.value}&nbsp;bpm (
              {diagnosis.respiratory_rate.levels})
            </p>
            <p>
              Temperature: {diagnosis.temperature.value}&deg;F (
              {diagnosis.temperature.levels})
            </p>
            <p>
              Heart Rate: {diagnosis.heart_rate.value}&nbsp;bpm (
              {diagnosis.heart_rate.levels})
            </p>
          </div>
        ))
      ) : (
        <p>No diagnosis history available.</p>
      )}
    </div>
  );
};

export default DiagnosisHistory;

// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// const DiagnosisHistory = () => {
//   const data = {
//     labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
//     datasets: [
//         {
//             label: 'Systolic',
//             data: [150, 160, 155, 145, 160, 160],
//             borderColor: 'rgba(255, 99, 132, 1)',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             fill: true,
//             tension: 0.4,
//         },
//         {
//           label: 'Diastolic',
//           data: [80, 75, 70, 72, 76, 78],
//           borderColor: 'rgba(54, 162, 235, 1)',
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           fill: true,
//           tension: 0.4,
//       }
//   ]
// };

// const options = {
//   plugins: {
//       legend: {
//           display: true,
//           labels: {
//               usePointStyle: true,
//           },
//       },
//   },
//   scales: {
//       y: {
//           beginAtZero: false,
//       },
//   },
// };
//   return (
//     <div className='diagnosisHistory'>
//             <h2>Diagnosis History</h2>
//             <div style={{ width: '80%', margin: '0 auto' }}>
//                 <Line data={data} options={options} />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//                 <div style={{ textAlign: 'center' }}>
//                     <img src="/path-to-respiratory-icon.png" alt="Respiratory Rate" />
//                     <p>Respiratory Rate</p>
//                     <p>20 bpm</p>
//                     <p>Normal</p>
//                 </div>
//                 <div style={{ textAlign: 'center' }}>
//                     <img src="/path-to-temperature-icon.png" alt="Temperature" />
//                     <p>Temperature</p>
//                     <p>98.6°F</p>
//                     <p>Normal</p>
//                 </div>
//                 <div style={{ textAlign: 'center' }}>
//                     <img src="/path-to-heart-rate-icon.png" alt="Heart Rate" />
//                     <p>Heart Rate</p>
//                     <p>78 bpm</p>
//                     <p>Lower than Average</p>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default DiagnosisHistory
