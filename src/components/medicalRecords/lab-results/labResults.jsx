import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./labResults.css";
import Download from "../../../assets/download_FILL0_wght300.svg";
import Image from "../../img";

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
    <div className="labResults">
      <h2>Lab Results</h2>
      {patient.lab_results && patient.lab_results.length > 0 ? (
        <ul>
          {patient.lab_results.map((result, index) => (
            <li key={index}>
              <a href={result} download>
                <span>{result}</span><Image src={Download} alt={"Download"} />
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
