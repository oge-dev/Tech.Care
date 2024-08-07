import React from "react";
import Image from "../img";
import { PatientsData } from "../PatientsData";
import HorizontalDottedIcon from "../../assets/Horizontal-dotted-line.png";
import SearchIcon from "../../assets/search-icon.png";
import "./patients.css";

const Patients = () => {
  return (
    <div className="patients-container">
      <div className="patients-header">
        <h1>Patients</h1>
        <Image src={SearchIcon} alt={"search icon"} />
      </div>
      <div className="patients-content">
        {PatientsData.map((patients_data) => (
          <div className="patients" key={patients_data.id}>
            <div className="patients-item">
              <Image
                src={patients_data.profile_picture}
                alt={"profile_picture"}
              />
              <div className="name-gender-age">
                <p>{patients_data.name}</p>
                <p>
                  <span>{patients_data.gender}</span>,&nbsp;
                  <span>{patients_data.age}</span>
                </p>
              </div>
            </div>
            <div className=".Horizontal-dotted-line">
              <Image
                src={HorizontalDottedIcon}
                alt={"Horizontal dotted line"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
