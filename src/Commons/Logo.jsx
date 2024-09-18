import React from 'react'
import "./Logo.css"
import {FaLaptopCode} from 'react-icons/fa6'
const Logo = () => {
  return (
    <>
      <div className="logo">
        <FaLaptopCode className="icon" />
        <h1 className='heading' >Yash Khetade</h1>
      </div>
    </>
  );
}

export default Logo