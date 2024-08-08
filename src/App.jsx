import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Patients from "./components/patients/patients.jsx";
import MedicalRecords from "./components/medicalRecords/MedicalRecords.jsx";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fedskillstest.coalitiontechnologies.workers.dev/", {
        auth: {
          username: "coalition",
          password: "skills-test",
        },
      })
      .then((response) => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  // Find Jessica Taylor in the patients list to get her index
  const defaultPatientIndex = patients.findIndex(patient => patient.name === "Jessica Taylor");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Patients />}>
          <Route path="/" element={<Navigate to={`/patient/${defaultPatientIndex}`} />} />
          <Route path="patient/:id" element={<MedicalRecords patients={patients} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
