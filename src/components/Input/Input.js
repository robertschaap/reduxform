import React from "react";
import "./Input.css";

const Input = (props) => {
  const { placeholder, name, value } = props;

  return (
    <input
      className="Input"
      type="text"
      name={name}
      value={value}
      placeholder={placeholder} />
  );
};

export default Input;
