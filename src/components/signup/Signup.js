import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import Image from "../../images/signup.png";

const Signup = () => {
  return (
    <div className="container">
      <div className="section-1">
        <img src={Image} alt="" />
      </div>
      <div className="section-2">
        <h2 className="form-heading">Signup</h2>
        <form className="form-container">
          <InputBox type="name" label="Name:" placeholder="Full Name..." />
          <InputBox type="email" label="Email:" placeholder="Email..." />
          <InputBox
            type="password"
            label="Password"
            placeholder="Password..."
          />
          <a href="#" className="forgot-password" style={{ top: "51%" }}>
            Forgot Password?
          </a>
          <Button type="login" value="CONTINUE" />
          <Button type="glogin" value="Sign in with Google" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
