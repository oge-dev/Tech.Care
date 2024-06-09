import React from 'react'
import DrJoseAvatar from "../../../assets/dr-jose.png"
import "./practitioner.css"

const Practitioner = () => {
  return (
    <div className='Practitioner'>
      <img src={DrJoseAvatar} alt="Avatar" />
      <div className="Avatar-text">
        <p>Dr. Jose Simmons</p>
        <p>General Practitioner</p>
      </div>
    </div>
  )
}

export default Practitioner