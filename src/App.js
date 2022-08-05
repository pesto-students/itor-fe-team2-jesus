import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";
import FindAMentor from '../src/components/FindAMentor/FindAMentor'
import Home from '../src/components/Home/Home'

function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="findAMentor" element={ <FindAMentor/> } />
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}


export default App;
