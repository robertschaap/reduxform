import React from "react";
import "./Group.css";

const Group = (props) => {
  const { children } = props;

  return (
    <div className="Group">{children}</div>
  );
};

export default Group;
