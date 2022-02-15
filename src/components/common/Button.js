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
    cursor: "pointer",
  };
  return (
    <>
      {type !== "glogin" ? (
        <button style={{ ...styles, background: "#20319F", color: "#FFF" }}>
          {value}
        </button>
      ) : (
        <a
          href="http://google.com"
          style={styles}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="pipory" style={{ position: "absolute", left: 20 }} />
          {value}
        </a>
      )}
    </>
  );
};

export default Button;
