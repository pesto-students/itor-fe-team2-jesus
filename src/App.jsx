import * as React from "react";

import { Routes, Route } from "react-router-dom";
import DashHome from "./components/Dashboard/DashHome";
import DashMessage from "./components/Dashboard/DashMessage";
import CalendlyWidget from './components/CalendlyWidget/CalendlyWidget';
import FindAMentor from "./modules/FindAMentor/FindAMentor";
import Home from "./modules/Home/Home";
import Login from "./modules/Login/Login";
import MentorProfile from './modules/MentorProfile/MentorProfile';
import MentorRegisteration from './modules/Register/MentorRegisteration';
import UserRegisteration from './modules/Register/UserRegisteration';
import UserDashboard from "./modules/UserDashboard/UserDashboard";
import Discussion from './modules/Discussions/Discussion';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="findAMentor" element={ <FindAMentor/> } /> */}
        <Route path="/" element={<Home />} />
        <Route path="/findAMentor" element={<FindAMentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/become-a-mentor" element={<MentorRegisteration />} />
        <Route path="/register" element={ <UserRegisteration />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/userDashboard/home" element={<DashHome />} />
        <Route path="/userDashboard/message" element={<DashMessage />} />
        <Route path="/mentor/:id"element={<MentorProfile />}></Route>
        <Route path="/book-now" element={<CalendlyWidget/>}></Route>
        <Route path="/discussion" element={<Discussion />}></Route>
      </Routes>
    </div>
  );
}

export default App;
