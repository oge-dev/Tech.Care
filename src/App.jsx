import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Patients from "./components/patients/patients.jsx";
import DiagnosisHistory from "./components/diagnosis-history/diagnosisHistory.jsx";
import Profile from "./components/profile/profile.jsx";
import DiagnosticList from "./components/diagnostic-list/diagnosticList.jsx";
import LabResults from "./components/lab-results/labResults.jsx";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Patients-DiagnosHistoryList-ProfileLabresults">
        <div className="Patients">
          <Patients />
        </div>

        <div className="Diagnosis-History-List">
          <div className="Diagnosis-History">
            <DiagnosisHistory />
          </div>
          <div className="Diagnostic-List">
            <DiagnosticList />
          </div>
        </div>
        <div className="Profile-LabResults">
          <div className="Profile">
            <Profile />
          </div>
          <div className="Lab-Results">
            <LabResults />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
