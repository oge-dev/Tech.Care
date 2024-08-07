import React from "react";
import Image from "../../img";
import OverviewIcon from "../../../assets/overview.png";
import PatientsIcon from "../../../assets/patients.png";
import ScheduleIcon from "../../../assets/schedule.png";
import MessageIcon from "../../../assets/message.png";
import TransactionsIcon from "../../../assets/transactions.png";
import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="nav-item Overview">
        <Image src={OverviewIcon} alt={"overview-icon"} />
        <p>Overview</p>
      </div>
      <div className="nav-item Patients">
        <Image src={PatientsIcon} alt={"patients-icon"} />
        <p>Patients</p>
      </div>
      <div className="nav-item Schedule">
        <Image src={ScheduleIcon} alt={"schedule-icon"} />
        <p>Overview</p>
      </div>
      <div className="nav-item Message">
        <Image src={MessageIcon} alt={"message-icon"} />
        <p>Patients</p>
      </div>
      <div className="nav-item Transactions">
        <Image src={TransactionsIcon} alt={"transactions-icon"} />
        <p>Patients</p>
      </div>
    </div>
  );
};

export default NavBar;
