import React from "react";
import { Button } from "@mui/material";

function DashHome() {
  return (
    <div className="dash_right">
      <p>Find mentors to get started and begin a conversation </p>
      <Button variant="contained">Discover</Button>
      <p>Ask your questions here</p>
      <Button variant="contained">Discussions</Button>
    </div>
  );
}

export default DashHome;
