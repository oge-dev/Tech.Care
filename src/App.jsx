import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Patients from "./components/patients/patients.jsx";
// import DiagnosisHistory from "./components/diagnosis-history/diagnosisHistory.jsx";
// import Profile from "./components/profile/profile.jsx";
// import DiagnosticList from "./components/diagnostic-list/diagnosticList.jsx";
// import LabResults from "./components/lab-results/labResults.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="Patients-DiagnosisHistory-DiagnosticList-Profile-LabResults"> */}
      <Patients />
      {/* <div className="DiagnosisHistory-DiagnosticList">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>
        <div className="Profile-LabResults">
          <Profile />
          <LabResults />
        </div>
      </div> */}
    </div>
  );
}

export default App;
