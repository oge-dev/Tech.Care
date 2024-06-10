import React from 'react'
import "./diagnosisHistory.css"
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DiagnosisHistory = () => {
  const data = {
    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
    datasets: [
        {
            label: 'Systolic',
            data: [150, 160, 155, 145, 160, 160],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.4,
        },
        {
          label: 'Diastolic',
          data: [80, 75, 70, 72, 76, 78],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true,
          tension: 0.4,
      }
  ]
};

const options = {
  plugins: {
      legend: {
          display: true,
          labels: {
              usePointStyle: true,
          },
      },
  },
  scales: {
      y: {
          beginAtZero: false,
      },
  },
};
  return (
    <div className='diagnosisHistory'>
            <h2>Diagnosis History</h2>
            <div style={{ width: '80%', margin: '0 auto' }}>
                <Line data={data} options={options} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src="/path-to-respiratory-icon.png" alt="Respiratory Rate" />
                    <p>Respiratory Rate</p>
                    <p>20 bpm</p>
                    <p>Normal</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src="/path-to-temperature-icon.png" alt="Temperature" />
                    <p>Temperature</p>
                    <p>98.6°F</p>
                    <p>Normal</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src="/path-to-heart-rate-icon.png" alt="Heart Rate" />
                    <p>Heart Rate</p>
                    <p>78 bpm</p>
                    <p>Lower than Average</p>
                </div>
            </div>
        </div>
  )
}

export default DiagnosisHistory