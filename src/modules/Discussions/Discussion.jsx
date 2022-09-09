import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./discussion.css";
import Questions from './Questions';

const Discussion = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <>
      <Header />
      <div className="discussion_wrapper">
        <div className="key_skills">
          <div className={isActive ? "highlights" : ""} onClick={handleActive}>
            Product Management
          </div>
          <div className={isActive ? "highlights" : ""} onClick={handleActive}>
            Product Management
          </div>
          <div className={isActive ? "highlights" : ""} onClick={handleActive}>
            Product Management
          </div>
          <div className={isActive ? "highlights" : ""} onClick={handleActive}>
            {" "}
            Product Management
          </div>
        </div>
        <Questions />
        <Questions />
      </div>
    </>
  );
};

export default Discussion;
