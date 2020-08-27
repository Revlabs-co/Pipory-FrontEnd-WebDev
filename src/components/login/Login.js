import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import Image from "../../images/login.png";
import "./styles.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (let element of e.target.elements) {
      if (element.name === "email" || element.name === "password") {
        data[element.name] = element.value;
      }
    }
    console.log(data);
  };

  return (
    <div className="container">
      <div className="section-1 pad">
        <img src={Image} alt="" />
      </div>
      <div className="section-2">
        <h2 className="form-heading">Login</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <InputBox
            type="email"
            label="Username/Email:"
            placeholder="Username/Email"
            name="email"
          />
          <InputBox
            type="password"
            label="Password:"
            placeholder="Password"
            name="password"
          />
          <a href="false" className="forgot-password">
            Forgot Password?
          </a>
          <Button type="login" value="LOG IN" />
          <Button type="glogin" value="Sign in with Google" />
        </form>
      </div>
    </div>
  );
};

export default Login;
