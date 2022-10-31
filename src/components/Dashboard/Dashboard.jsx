import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import HomeIcon from "@mui/icons-material/Home";
import "./Dashboard.css";
import DashHome from "./DashHome";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from '@mui/icons-material';
import axios from "axios";

function Dashboard() {
const navigate = useNavigate()
  const logout = (e) => {
    const configuration = {
      method: "get",
      url: "https://itor-simple-node-api.herokuapp.com/api/v1/logout",
    };
    axios(configuration)
    .then((result) => {
      if (result.data.success) {
        localStorage.removeItem("token")
        navigate("/login");
      } else {        navigate("/login");
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
          {/* <Link to="/userDashboard/home">
            <div className="side_bar_item">
              <HomeIcon fontSize="large" />
              <div className="side_text">Home</div>
            </div>
          </Link> */}         
          <Link to='/discussion'>
            <div className="side_bar_item">
              <HomeIcon fontSize="large" />
              <div className="side_text">Discussions</div>
            </div>
          </Link>
         
            <div className="side_bar_item">
              <Logout fontSize="large" />
              <div className="side_text" onClick={() => logout()}>Logout</div>
            </div>
        </aside>
        <DashHome />
        {/* <DashMessage /> */}
        {/* <Bookings /> */}
      </div>
    </div>
  );
}

export default Dashboard;
