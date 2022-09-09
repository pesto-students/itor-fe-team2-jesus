import React from "react";
import UserDashboard from "../../modules/UserDashboard/UserDashboard";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import HomeIcon from "@mui/icons-material/Home";
import "./Dashboard.css";
import DashHome from "./DashHome";
import { Link } from "@mui/material";
import DashMessage from "./DashMessage";
import Bookings from "./Bookings";
import { Logout } from '@mui/icons-material';
import axios from "axios";

function Dashboard() {

  const logout = (e) => {
    const configuration = {
      method: "get",
      url: "https://itor-simple-node-api.herokuapp.com/api/v1/logout",
    };
    axios(configuration)
    .then((result) => {
      console.log(result)
      if (result.data.success) {
        localStorage.removeItem("token")
        navigate("/login");
      } else {
        setMessage(result.data.message)
        navigate("/login");
      }
    })
    .catch((error) => {
      error = new Error();
    });
  }


  return (
    <div>
      <DashboardHeader />
      <div className="dash_body">
        <aside className="sidebar">
          <div className="side_bar_item profile">
            {" "}
            <img className="mentor_dash_img" src={mentor8} alt="mentor pic" />
            <h3>Alena Cruise</h3>
          </div>
          <Link to="/userDashboard/home">
            <div className="side_bar_item">
              <HomeIcon fontSize="large" />
              <a className="side_text">Home</a>
            </div>
          </Link>
         
          <Link>
            <div className="side_bar_item">
              <HomeIcon fontSize="large" />
              <a className="side_text">Booking</a>
            </div>
          </Link>
          <Link>
            <div className="side_bar_item">
              <Logout fontSize="large" />
              <a className="side_text" onClick={() => logout()}>Logout</a>
            </div>
          </Link>
        </aside>
        <DashHome />
        {/* <DashMessage /> */}
        {/* <Bookings /> */}
      </div>
    </div>
  );
}

export default Dashboard;
