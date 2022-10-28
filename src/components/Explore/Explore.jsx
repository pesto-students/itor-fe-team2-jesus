import React from "react";
import "./Explore.css";

import Search from "../Search/Search";
import ExploreGrid from "../ExploreGrid/ExploreGrid";

function Explore() {
  return (
    <div className="explore">
      <h1 style={{ textAlign: "center" }}>Explore our Mentors</h1>
      <ExploreGrid />
    </div>
  );
}

export default Explore;
