import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Box } from "@mui/material";
import { hideLoading, showLoading } from "../../store/alertsSlice";
import Footer from '../Home/Footer';

function AskQuestion(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [question, setQuestion] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://itor-simple-node-api.herokuapp.com/api/v1/create/post",
      data: {
        title,
        body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error-login", error);
      });
  };

  return (
    <>
      <div className="login_container">
        <h1>Ask a Question</h1>
        <div className="login_wrapper">
          <div>
            {/* {login ? (
              <Box sx={{ color: "success.main" }}>{message}</Box>
            ) : (
              <Box sx={{ color: "error.main" }}>{message}</Box>
            )} */}
            <form className="form_wrapper" onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="title"
                name="title"
                label="title"
                variant="standard"
                type="text"
                margin="normal"
                sx={{ width: "40ch" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
              <br />
              <TextField
                id="body"
                name="body"
                label="Description"
                variant="standard"
                type="text"
                margin="normal"
                sx={{ width: "40ch" }}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />{" "}
              <br />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  margin: "10px 0",
                  width: "100%",
                  backgroundColor: "#395b64",
                  textTransform: "none",
                }}
              >
                Post a Question
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskQuestion;
