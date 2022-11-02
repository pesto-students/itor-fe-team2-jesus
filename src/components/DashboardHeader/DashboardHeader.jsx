import React from "react";
import itor_logo_light from "../../assets/logo_light.png";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import "./DashboardHeader.css";

function DashboardHeader() {

  return (
    <div className="dash_header_wrapper dashboard_head">
     <a href="/"> <img className="logo" src={itor_logo_light} alt="Itor logo" /></a>
      <div className="dash_header_right">
        <img className="mentor_image_rounded" src={mentor8} alt="Mentor" />
      </div>
    </div>
  );
}

export default DashboardHeader;
