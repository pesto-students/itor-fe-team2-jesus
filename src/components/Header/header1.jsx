

import React from "react";
import itor_logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header_wrapper">
        <div className="header_left">
          <img className="logo" src={itor_logo} alt="Itor Logo" />
          <Link className="nav_link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="nav_link" to="/findAMentor">
            <h3>Find A Mentor</h3>
          </Link>
          <Link className="nav_link" to="/discussion">
            <div className="discussion">
              <div className="red_dot"></div> <h3>Discussions</h3>
            </div>
          </Link>
        </div>
        <div className="header_right">
          <Link className="nav_link" to="/become-a-mentor">
            <div className="discussion">
              <h3>Become a Mentor</h3>
            </div>
          </Link>
          <Link to="/register">
            <Button variant="contained" className="register">
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="contained" className="login">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header1;
