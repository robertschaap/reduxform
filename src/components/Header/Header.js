import React from "react";
import "./Header.css";

const Header = (props) => {
  const { children } = props;

  return (
    <header className="Header">
      <h1 className="HeaderH1">{children}</h1>
    </header>
  );
};

export default Header;
