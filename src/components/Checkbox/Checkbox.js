import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  const { label, value, name } = props;
  return (
    <label className="Checkbox">
      <input type="checkbox" name={name} value={value} />
      {label}
    </label>
  );
};

export default Checkbox;
