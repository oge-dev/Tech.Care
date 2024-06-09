import React from "react";
import "./menu.css";
import MenuComp from "./menuComp/menuComp";
import OverviewIcon from "../../../assets/overview.png";
import PatientsIcon from "../../../assets/patients.png";
import ScheduleIcon from "../../../assets/schedule.png";
import MessageIcon from "../../../assets/message.png";
import TransactionsIcon from "../../../assets/transactions.png";

const Menu = () => {
  return (
    <div className="menu-content">
      <MenuComp
        MenuIcon={OverviewIcon}
        alt="overview-icon"
        className="Menu-Items Overview"
        MenuText="Overview"
      />
      <div className="patients-wrapper">
        <MenuComp
          MenuIcon={PatientsIcon}
          alt="patients-icon"
          className="Menu-Items Patients"
          MenuText="Patients"
        />
      </div>
      <MenuComp
        MenuIcon={ScheduleIcon}
        alt="schedule-icon"
        className="Menu-Items Schedule"
        MenuText="Schedule"
      />
      <MenuComp
        MenuIcon={MessageIcon}
        alt="message-icon"
        className="Menu-Items Message"
        MenuText="Message"
      />
      <MenuComp
        MenuIcon={TransactionsIcon}
        alt="transactions-icon"
        className="Menu-Items Transactions"
        MenuText="Transactions"
      />
    </div>
  );
};

export default Menu;
