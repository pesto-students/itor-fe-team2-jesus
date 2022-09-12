import React, { useState } from "react";
import { Box, CircularProgress, TextField, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from '../Home/Footer';

const Answer = () => {
  const [text, setText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "put",
      url: `https://itor-simple-node-api.herokuapp.com/api/v1/create/comment/${id}`,
      data: {
        text,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios(configuration)
      .then((result) => {
        navigate("/discussion");
      })
      .catch((error) => {
        // console.log("error-login", error);
      });
  };

  return (
    <>
      <Header />
      <form
        className="form_wrapper answer_wrapper"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          id="text"
          name="text"
          label="answer"
          variant="standard"
          type="text"
          margin="normal"
          sx={{ width: "40ch" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiLine={true}
          rows={4}
          floatingLabelText="MultiLine and FloatingLabel"
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
          Post
        </Button>
      </form>
      <Footer />
    </>
  );
};

export default Answer;
