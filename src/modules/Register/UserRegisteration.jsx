import React, { useState, useEffect } from "react";
import registerImg from "../../assets/help.png";
import "./Register.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import Footer from '../Home/Footer';

function UserRegisteration() {
  const [register, setRegister] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    schoolName: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        const configuration = {
          method: "post",
          url: "https://itor-simple-node-api.herokuapp.com/api/v1/signup",
          data: values,
        };
        axios(configuration)
          .then((result) => {
            if (result.data.success) {
              action.resetForm();
              navigate("/login");
              setRegister(true)
            } else{
              setMessage(result.data.message)
              action.resetForm();

            }
          })
          .catch((error) => {
            error = new Error();
          });
        
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors );

  return (
    <>
      <Header />
      <div className="register_container">
        <h1>Register</h1>
        <div className="register_wrapper">
          <img
            className="register_img"
            src={registerImg}
            alt="Register image"
          />
          <div>
            {register ? (
              <Box sx={{ color: "success.main" }}>{message}</Box>
            ) : (
              <Box sx={{ color: "error.main" }}>{message}</Box>
            )}
            <form className="form_wrapper" onSubmit={handleSubmit}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="standard"
                sx={{ width: "40ch" }}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <br />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="standard"
                margin="normal"
                sx={{ width: "40ch" }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <br />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type="password"
                margin="normal"
                sx={{ width: "40ch" }}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <br />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              <TextField
                id="schoolName"
                name="schoolName"
                label="School Name"
                sx={{ width: "40ch" }}
                margin="normal"
                variant="standard"
                value={values.schoolName}
                onChange={handleChange}
                onBlur={handleBlur}
              />{" "}
              <br />
              {errors.schoolName && touched.schoolName ? (
                <p className="form-error">{errors.schoolName}</p>
              ) : null}
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ margin: "10px 0", width: "100%" }}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserRegisteration;
