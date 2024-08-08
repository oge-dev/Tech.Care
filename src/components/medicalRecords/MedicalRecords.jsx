import React from "react";
import DiagnosisHistory from "./diagnosis-history/diagnosisHistory";
import PatientInformation from "./patientInformation/patientInformation";
import DiagnosticList from "./diagnostic-list/diagnosticList";
import LabResults from "./lab-results/labResults";
import "./medicalRecords.css";

const MedicalRecords = ({ patients }) => {
  return (
    <div className="medical-records">
      <div className="history-list">
        <DiagnosisHistory patients={patients} />
        <DiagnosticList patients={patients} />
      </div>
      <div className="information-results">
        <PatientInformation patients={patients} />
        <LabResults patients={patients} />
      </div>
    </div>
  );
};

export default MedicalRecords;
