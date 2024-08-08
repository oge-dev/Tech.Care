import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PatientInformation = ({ patients }) => {
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
      <img src={patient.profile_picture} alt={`${patient.name}'s profile`} />
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.date_of_birth}</p>
      <p>Gender: {patient.gender}</p>
      <p>Phone Info: {patient.phone_number}</p>
      <p>Emergency Contacts: {patient.emergency_contact}</p>
      <p>Insurance Provider: {patient.insurance_type}</p>
      <button>Show All Information</button>
    </div>
  );
};

export default PatientInformation