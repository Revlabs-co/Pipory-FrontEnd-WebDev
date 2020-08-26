import React from "react";
import logo from "../../images/google.svg";

const Button = ({ type, value }) => {
  const styles = {
    border: "none",
    borderRadius: "7px",
    width: "70%",
    margin: "0 auto",
    display: "block",
    padding: "13px 0",
    marginTop: "2.5rem",
    marginBottom: "3rem",
    background: "#FFF",
    position: "relative",
    fontWeight: "bold",
    fontSize: "16px",
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
