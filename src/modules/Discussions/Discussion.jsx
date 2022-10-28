import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./discussion.css";
import { Box, CircularProgress, TextField, Button } from "@mui/material";
import Questions from "./Questions";
import { useNavigate, Link } from "react-router-dom";
import AskQuestion from "./AskQuestion";
import { Preview } from "@mui/icons-material";
import Footer from '../Home/Footer';

const Discussion = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [discussionData, setDiscussionData] = useState("");
  const [question, setQuestion] = useState([]);
  const [isShown, setShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiscussion = async () => {
      const response = await fetch(
        `https://itor-simple-node-api.herokuapp.com/api/v1/posts/search`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      console.log(data);
      if (!localStorage.getItem("token")) {
        return navigate('/login')
         }
      setIsLoading(false);
      setDiscussionData(data.posts);
    };
    fetchDiscussion();
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  }

  const addQuestion = ([title, body]) => {
    setDiscussionData((prevItems) => {
      return [...prevItems, [title, body]];
    });
  };

  return (
    <>
      <Header />
      <AskQuestion onAdd={addQuestion} />
      <div className="discussion_wrapper">
        {discussionData.map((item) => {
          return (
            <div key={item._id} className="questions">
              {/* <img className="user_img" src={mentor8} alt="mentor pic" /> */}
              <div>
                <h3 className="heading_margin">{item.title}</h3>
                <h5>Posted By:</h5>
                  <p className="author">{item.postedBy.name}</p>
                <div>
                  {item.comments.map((answer, index) => {
                    return (
                      
                      <div key={index}>
                     <h3>{index}</h3> <div> {answer.text} </div> <br />
                      </div>
                       
                    );
                  })}{" "}
                  
                  <div
                    className="highlights"
                    onClick={() => navigate(`/answer/${item._id}`)}
                  >
                    Add Answer
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Discussion;
