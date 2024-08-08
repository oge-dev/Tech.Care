import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LabResults = ({ patients }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (patients && patients.length > 0) {
      setPatient(patients[id]);
    }
  }, [id, patients]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <h2>Lab Results</h2>
      {patient.lab_results && patient.lab_results.length > 0 ? (
        <ul>
          {patient.lab_results.map((result, index) => (
            <li key={index}>
              <a href={result} download>
                {result}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div>No lab results available.</div>
      )}
    </div>
  );
};

export default LabResults;
