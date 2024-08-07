import React from "react";
import "./header.css";
import Logo from "./logo/logo";
import NavBar from "./navBar/navBar";
import Practitioner from "./practitioner/practitioner";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <Practitioner />
    </div>
  );
};

export default Header;
