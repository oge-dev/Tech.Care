import React from 'react'
import Image from '../../img'
import LogoImg from "../../../assets/logo.png"
import "./logo.css"

const Logo = () => {
  return (
    <div className="logo">
        <Image src={LogoImg} alt={"Tech.care logo"} />
      </div>
  )
}

export default Logo