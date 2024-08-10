import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./diagnosticList.css"

const DiagnosticList = ({ patients }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (patients && patients.length > 0) {
      setPatient(patients[id]);
    }
  }, [id, patients]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div className="diagnosis-list">
      <h2>Diagnosis List</h2>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patient.diagnostic_list && patient.diagnostic_list.length > 0 ? (
            patient.diagnostic_list.map((diagnosis, diagIndex) => (
              <tr key={diagIndex}>
                <td>{diagnosis.name}</td>
                <td>{diagnosis.description}</td>
                <td>{diagnosis.status}</td>
              </tr>
            ))
          ) : (
            <p>No diagnosis diagnostic list available.</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
