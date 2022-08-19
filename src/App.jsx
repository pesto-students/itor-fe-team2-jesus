import * as React from "react";

import { Routes, Route } from "react-router-dom";
import DashHome from './components/Dashboard/DashHome';
import DashMessage from './components/Dashboard/DashMessage';
import FindAMentor from "./modules/FindAMentor/FindAMentor";
import Home from "./modules/Home/Home";
import Login from "./modules/Login/Login";
import Register from "./modules/Register/Register";
import UserDashboard from './modules/UserDashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="findAMentor" element={ <FindAMentor/> } /> */}
        <Route path="/" element={<Home />} />
        <Route path="/findAMentor" element={<FindAMentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/userDashboard/home" element={ <DashHome/> } />
        <Route path="/userDashboard/message" element={<DashMessage />} />
      </Routes>
    </div>
  );
}

export default App;
