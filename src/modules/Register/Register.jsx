import React from "react";
import Form from "../../components/Form/Form";
import registerImg from "../../assets/help.png";
import "./Register.css";

function Register() {
  return (
    <div className='register_container'>
      <h1>Register</h1>
      <div className="register_wrapper">
        <Form />
        <img className='register_img' src={registerImg} alt="Register image" />
      </div>
    </div>
  );
}

export default Register;
