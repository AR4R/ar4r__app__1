import React from "react";
import logo from "./../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="app__logo" alt="logo" />
    </header>
  );
};

export default Header;
