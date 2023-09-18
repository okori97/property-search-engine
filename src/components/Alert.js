import React from "react";
import "../styles/Alert.css";

const Alert = ({ message, isSuccess }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`${isSuccess ? "Alert__success" : "Alert__error"}`}>
      <p
        className={`${
          isSuccess ? "Alert__success-message" : "Alert__error-message"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default Alert;
