import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  const { error, touched } = props.meta;

  if (!error || !touched) {
    return null;
  }

  return (
    <small className="ErrorMessage">{error}</small>
  );
};

export default ErrorMessage;
