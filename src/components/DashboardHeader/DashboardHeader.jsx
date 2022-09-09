import React from "react";
import itor_logo_light from "../../assets/logo_light.png";
import MessageIcon from "@mui/icons-material/Message";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./DashboardHeader.css";
import { useState } from 'react';

function DashboardHeader({ props }) {
  const [toggleDropdown, setToggleDropdown] = useState(true)

  return (
    <div className="dash_header_wrapper dashboard_head">
      <img className="logo" src={itor_logo_light} alt="Itor logo" />
      <div className="dash_header_right">
        <img className="mentor_image_rounded" src={mentor8} alt="Mentor" />
        <KeyboardArrowDownRoundedIcon onClick={(prev) => setToggleDropdown(!prev)} />
      </div>
    </div>
  );
}

export default DashboardHeader;
