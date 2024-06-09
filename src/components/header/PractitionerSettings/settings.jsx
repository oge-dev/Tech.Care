import React from 'react'
import SettingsIcon from "../../../assets/settings.png"
import VerticalDottedIcon from "../../../assets/vertical-dotted-line.png"
import "./settings.css"

const Settings = () => {
  return (
    <div className='settings'>
      <img src={SettingsIcon} alt="settings" />
      <img src={VerticalDottedIcon} alt="vertical dotted line" />
    </div>
  )
}

export default Settings