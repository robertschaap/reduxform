import React from "react";
import "./Button.css";

const Button = (props) => {
  const { submit, children } = props;

  return (
    <button
      className="Button"
      type={submit ? "submit" : "button"}>
      {children}
    </button>
  );
};

export default Button;
