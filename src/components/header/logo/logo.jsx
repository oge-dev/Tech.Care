import React from 'react'
import LogoImg from "../../../assets/logo.png"
import "./logo.css"

const Logo = () => {
  return (
    <div className='logo-content'>
      <img src={LogoImg} alt="Tech.care logo" className="" />
    </div>
  )
}

export default Logo