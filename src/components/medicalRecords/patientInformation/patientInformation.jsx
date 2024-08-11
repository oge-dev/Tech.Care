import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./patientInformation.css";
import DOB from "../../../assets/BirthIcon.png";
import Gender from "../../../assets/FemaleIcon.png";
import PhoneInfo from "../../../assets/PhoneIcon.png";
import Emergency from "../../../assets/PhoneIcon.png";
import Insurance from "../../../assets/InsuranceIcon.png";
import Image from "../../img";

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
    <div className="patient-information">
      <Image src={patient.profile_picture} alt={`${patient.name}'s profile`} />
      <h2>{patient.name}</h2>
      <div className="patient-details">
        <div className="info">
          <Image src={DOB} alt={"date_of_birth"} />
          <div className="">
            <h3>Date of Birth</h3>
            <p>{patient.date_of_birth}</p>
          </div>
        </div>
        <div className="info">
          <Image src={Gender} alt={"gender"} />
          <div className="">
            <h3>Gender</h3>
            <p>{patient.gender}</p>
          </div>
        </div>
        <div className="info">
          <Image src={PhoneInfo} alt={"phone_number"} />
          <div className="">
            <h3>Phone Info</h3>
            <p>{patient.phone_number}</p>
          </div>
        </div>
        <div className="info">
          <Image src={Emergency} alt={"emergency_contact"} />
          <div className="">
            <h3>Emergency Contacts</h3>
            <p>{patient.emergency_contact}</p>
          </div>
        </div>
        <div className="info">
          <Image src={Insurance} alt={"insurance_type"} />
          <div className="">
            <h3>Insurance Provider</h3>
            <p>{patient.insurance_type}</p>
          </div>
        </div>
        <div className="btn">
          <button>Show All Information</button>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
