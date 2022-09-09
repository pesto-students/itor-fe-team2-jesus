import React from "react";
import mentor8 from "../../assets/mentor_pics/08.jpg";
import "./discussion.css";

const Questions = () => {
  return (
    <>
      <div className="questions">
        <img className="user_img" src={mentor8} alt="mentor pic" />
        <div>
          <h3 className="heading_margin">
            Did react useSearchParams hook will unmount component?
          </h3>
          <div className="bottom_questions">
            <p className="author">Alena Cruise</p>
            <div className="highlights">Answer</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
