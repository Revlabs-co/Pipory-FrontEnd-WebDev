import React from "react";
import logo from "../../images/google.svg";

const Button = ({ type, value }) => {
  const styles = {
    border: "none",
    borderRadius: "10px",
    width: "70%",
    margin: "0 auto",
    display: "block",
    padding: "13px 0",
    marginBottom: "1rem",
    background: "#FFF",
    position: "relative",
  };
  return (
    <>
      {type !== "glogin" ? (
        <button style={{ ...styles, background: "#20319F", color: "#FFF" }}>
          {value}
        </button>
      ) : (
        <button style={styles}>
          <img src={logo} alt="" style={{ position: "absolute", left: 20 }} />
          {value}
        </button>
      )}
    </>
  );
};

export default Button;
