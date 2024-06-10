import React from "react";
import { PatientsData } from "./Patients-data/PatientsData";
import "./patients.css";
import HorizontalDottedIcon from "../../assets/Horizontal-dotted-line.png";
import SearchIcon from "../../assets/search-icon.png";

const Patients = () => {
  return (
    <div className="Patients-content">
      <div className="Patients_header">
        <h1>Patients</h1>
        <img src={SearchIcon} alt="search icon" className="search-icon" />
      </div>
      {PatientsData.map((patients_data) => (
        <div className="Avatar-Name-genderAge_wrapper" key={patients_data.id}>
          <div className="Avatar-Name-genderAge">
            <img
              src={patients_data.patientsAvatar}
              alt="Avatar"
              className="patientsAvatar"
            />
            <div className="Name-genderAge">
              <div className="firstName-lastName">
                <span>{patients_data.firstName}</span>&nbsp;
                <span>{patients_data.lastName}</span>
              </div>
              <div className="gender-age">
                <span>{patients_data.gender}</span>,&nbsp;
                <span>{patients_data.age}</span>
              </div>
            </div>
          </div>
          <img
            src={HorizontalDottedIcon}
            alt="Horizontal dotted line"
            className="Horizontal-dotted-line"
          />
        </div>
      ))}
    </div>
  );
};

export default Patients;
