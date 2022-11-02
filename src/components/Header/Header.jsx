import React, { useState } from "react";
import itor_logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [toggleHeaderMenu, setToggleHeaderMenu] = useState(false)

  return (
    <>
      <div className="header_wrapper laptop">
        <div className="header_left">
         <a href='/'> <img className="logo" src={itor_logo} alt="Itor Logo" /></a>
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
      <div className="mobile_header mobile">
        {toggleHeaderMenu ? <CloseIcon fontSize="large" onClick={() => setToggleHeaderMenu(!toggleHeaderMenu)}/> : <MenuIcon fontSize="large" onClick={() => setToggleHeaderMenu(!toggleHeaderMenu)} /> }
        
        <img className="logo" src={itor_logo} alt="Itor Logo" />
        <Link to="/login">
          <Button variant="contained" className="login">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Header;
