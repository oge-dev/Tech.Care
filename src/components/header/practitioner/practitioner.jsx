import React from "react";
import Image from "../../img";
import DrJoseAvatar from "../../../assets/dr-jose.png";
import SettingsIcon from "../../../assets/settings.png";
import VerticalDottedIcon from "../../../assets/vertical-dotted-line.png";
import "./practitioner.css";

const Practitioner = () => {
  return (
    <div className="practitioner-settings">
      <div className="Practitioner">
        <Image src={DrJoseAvatar} alt={"Avatar"} />
        <div className="Practitioner-details">
          <p>Dr. Jose Simmons</p>
          <p>General Practitioner</p>
        </div>
      </div>
      <div className="settings">
        <Image src={SettingsIcon} alt={"settings"} />
        <Image src={VerticalDottedIcon} alt={"vertical dotted line"} />
      </div>
    </div>
  );
};

export default Practitioner;
