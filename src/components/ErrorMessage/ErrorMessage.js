import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  const { error } = props.meta;

  if (!error) {
    return null;
  }

  return (
    <small className="ErrorMessage">{error}</small>
  );
};

export default ErrorMessage;
