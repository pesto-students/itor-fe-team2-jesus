import Header from "../../components/Header/Header";
import "./Home.css";
import main from "../../assets/home_1.png";
import Explore from "../../components/Explore/Explore";
import { BottomNavigation, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home_body">
        <div>
          <h1>Change your life. Learn & Build with Pro Seniors and Mentors</h1>
          <p>
            <strong>
              <em>
                You can never understand everything. But, you should push
                yourself to understand the system. - Ryan Dahl (Creator of Node
                JS)
              </em>
            </strong>
          </p>
        </div>
        <div>
          <img className="home_img" src={main} alt="People talking" />
        </div>
      </div>
      <Explore />
      <div className="home_reason">
        <h1>Why do people join Itor?</h1>
        <h2>01</h2>
        <p>
          Share new ideas, lessons learned, proven practices, insights, and
          practical suggestions.
        </p>
        <h2>02</h2>
        <p>
          Innovate through brainstorming, building on each other’s ideas, and
          keeping informed on emerging developments.
        </p>
        <h2>03</h2>
        <p>
          Collaborate through threaded discussions, conversations, and
          interactions.
        </p>
      </div>
      <Footer />
    </>
  );
}
