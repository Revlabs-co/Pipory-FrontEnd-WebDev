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
        <h2>Login</h2>
        <InputBox type="username" label="Username/Email" />
        <InputBox type="password" label="Password" />
        <Button type="login" />
        <Button type="glogin" />
      </div>
    </div>
  );
};

export default Login;
