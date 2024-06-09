import React from 'react'
import './header.css'
import Logo from "./logo/logo"
import Menu from "./menu/menu"
import Practitioner from "./PractitionerSettings/practitioner"
import Settings from "./PractitionerSettings/settings"

const Header = () => {
  return (
    <div className='Header-content'>
      <div className="logo">
        <Logo/>
      </div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="practitioner-settings">
      <div className="practitioner">
        <Practitioner/>
      </div>
      <div className="settings">
        <Settings/>
      </div>
      </div>
      
    </div>
  )
}

export default Header