import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useLocation } from "react-router-dom";
import Image from "../img";
import HorizontalDottedIcon from "../../assets/Horizontal-dotted-line.png";
import SearchIcon from "../../assets/search-icon.png";
import "./patients.css";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

   // Extract the patient ID from the URL to determine the active patient
   const activePatientId = location.pathname.split('/').pop();

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

  return (
    <div className="patients-outlet-wrapper">
      <div className="patients-container">
        <div className="patients-header">
          <h1>Patients</h1>
          <Image src={SearchIcon} alt={"search icon"} />
        </div>
        <div className="patients-content">
          {patients.map((patient, index) => (
            <Link  to={`patient/${index}`} 
            className={`patients ${activePatientId === String(index) ? 'active' : ''}`} 
             key={index}>
              <div className="patients-item">
                <Image src={patient.profile_picture} alt={"profile_picture"} />
                <div className="name-gender-age">
                  <p>{patient.name}</p>
                  <p>
                    <span>{patient.gender}</span>,&nbsp;
                    <span>{patient.age}</span>
                  </p>
                </div>
              </div>
              <div className="Horizontal-dotted-line">
                <Image
                  src={HorizontalDottedIcon}
                  alt={"Horizontal dotted line"}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Patients;
