import React from 'react'
import { Link } from 'react-router-dom'
import itor_logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
        <img className="footer_logo" src={itor_logo} alt="Itor Logo" />
        <p className='footer_description'>
          Expand your skillset, gain insights, and get support from mentors at
          no cost.
        </p>
        <Link className="footer_link" to="/findAMentor">
          {" "}
          Find A Mentor{" "}
        </Link>
        <Link className="footer_link" to="/discussion">
          {" "}
          Discussions{" "}
        </Link>
      </div>
  )
}

export  default Footer