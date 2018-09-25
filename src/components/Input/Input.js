import React from "react";
import "./Input.css";

const Input = (props) => {
  const { placeholder, name, type, value, input, onChange } = props;
  return (
    <input
      className="Input"
      {...input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder} />
  );
};

export default Input;
