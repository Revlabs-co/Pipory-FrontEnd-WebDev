import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const InputBox = ({ label, type, placeholder, name }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const styles = {
    input: {
      width: "70%",
      padding: "13px 10px",
      border: "none",
      borderRadius: "7px",
    },
    label: {
      display: "block",
      textAlign: "left",
      marginLeft: "4.2rem",
      marginBottom: "5px",
    },
    passwordMask: {
      left: "77%",
      top: "54%",
      position: "absolute",
      cursor: "pointer",
    },
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div style={{ marginBottom: "1rem", position: "relative" }}>
      <label htmlFor={label} style={styles.label}>
        {label}
      </label>
      {type !== "password" ? (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          style={styles.input}
          name={name}
          required
        />
      ) : (
        <input
          type={passwordShown ? "text" : "password"}
          id={label}
          placeholder={placeholder}
          style={styles.input}
          name={name}
          required
        />
      )}
      {type === "password" && (
        <i style={styles.passwordMask} onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </i>
      )}
    </div>
  );
};

export default InputBox;
