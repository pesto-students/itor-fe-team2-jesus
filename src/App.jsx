import * as React from 'react';

import { Routes, Route } from 'react-router-dom';
import FindAMentor from './modules/FindAMentor/FindAMentor';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="findAMentor" element={ <FindAMentor/> } /> */}
        <Route path="/" element={<Home />} />
        <Route path="/findAMentor" element={<FindAMentor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
