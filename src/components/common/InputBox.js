import React from "react";

const InputBox = ({ label, type, placeholder }) => {
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
  };
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label} style={styles.label}>
        {label}
      </label>
      {type === "password" ? (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          style={styles.input}
        />
      ) : (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          style={styles.input}
        />
      )}
    </div>
  );
};

export default InputBox;
