import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import Image from "../../images/signup.png";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    for (let element of e.target.elements) {
      if (
        element.name === "email" ||
        element.name === "password" ||
        element.name === "name"
      ) {
        data[element.name] = element.value;
      }
    }
    console.log(data);
  };

  return (
    <div className="container">
      <div className="section-1">
        <img src={Image} alt="" />
      </div>
      <div className="section-2">
        <h2 className="form-heading">Signup</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <InputBox
            type="name"
            label="Name:"
            placeholder="Full Name..."
            name="name"
          />
          <InputBox
            type="email"
            label="Email:"
            placeholder="Email..."
            name="email"
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="Password..."
            name="password"
          />
          <a href="false" className="forgot-password" style={{ top: "51%" }}>
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
