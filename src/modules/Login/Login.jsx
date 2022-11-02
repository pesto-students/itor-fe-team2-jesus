import React, { useState } from "react";
import loginImg from "../../assets/unlock.png";
import "./Login.css";
import Header from '../../components/Header/Header';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Box } from '@mui/material';
import Footer from '../Home/Footer';

function Login() {
  const [email, setEmail] = useState("pesto@project.com");

  const [password, setPassword] = useState("9999999999");

  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://itor-simple-node-api.herokuapp.com/api/v1/login",
      data: {
        email,
        password
      },
    };
    axios(configuration)
    .then((result) => {
      if (result.data.success) {
        setMessage(result.data.message)
        localStorage.setItem("token", result.data.token)
        setLogin(true)
        navigate("/userDashboard");
      } else {
        setMessage(result.data.message)
        
      }
    })
    .catch((error) => {
      console.log('error-login', error)
    });
  }
  return (
    <>
    <Header />
    <div className='login_container'>
      <h1>Login</h1>
      <div className="login_wrapper">
      <img className='login_img' src={loginImg} alt="Register icon" />
        <div>
        {login ? (
            <Box sx={{ color: 'success.main' }}>{message}</Box>
          ) : (
            <Box sx={{ color: 'error.main' }}>{message}</Box>
          )}
        <form className="form_wrapper" onSubmit={(e)=>handleSubmit(e)}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            margin="normal"
            sx={{ width: "40ch" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type="password"
            margin="normal"
            sx={{ width: "40ch" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ margin: "10px 0", width: "100%" }}
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </Button>
        </form>
      </div>
        
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
