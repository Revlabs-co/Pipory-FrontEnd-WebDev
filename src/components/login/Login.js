import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import Image from "../../images/login.png";
import "./styles.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="section-1">
        <img src={Image} alt="" />
      </div>
      <div className="section-2">
        <h2 className="form-header">Login</h2>
        <form className="form-container">
          <InputBox type="username" label="Username/Email" />
          <InputBox type="password" label="Password" />
          <a href="#">Forgot Password?</a>
          <Button type="login" value="LOG IN" />
          <Button type="glogin" value="Sign in with Google" />
        </form>
      </div>
    </div>
  );
};

export default Login;
