import React from "react";
import itor_logo_light from "../../assets/logo_light.png";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <div className="header_wrapper dashboard_head">
      <img className="logo" src={itor_logo_light} alt="Itor logo" />
      <div className="header_right">
        <MessageRoundedIcon fontSize="large" />
        <img className="mentor_image_rounded" src={mentor8} alt="Mentor" />
        <KeyboardArrowDownRoundedIcon />
      </div>
    </div>
  );
}

export default DashboardHeader;
