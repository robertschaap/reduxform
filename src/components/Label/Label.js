import React from "react";
import "./Label.css";

const Label = (props) => {
  const { label, required, requirements } = props;

  return (
    <label className="Label">
      {label}
      {required && <span className="Label-required"> - required field</span>}
      {requirements && <span className="Label-required"> - {requirements}</span>}
    </label>
  );
};

export default Label;
