import React from 'react'
import "./menuComp.css"

const MenuComp = ({MenuIcon,alt, className, MenuText}) => {
  return (
    <div className='menu-comp'>
        <img src={MenuIcon} alt={alt} className={className} />
        <p>{MenuText}</p>
    </div>
  )
}

export default MenuComp