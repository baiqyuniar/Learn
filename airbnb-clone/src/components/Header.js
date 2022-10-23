import React from "react";
import Logo from "../images/airbnb-logo.png";

const Header = () => {
  return (
    <section id="header">
      <div className="navbar">
        <img src={Logo} alt="logo" className="icon" />
      </div>
    </section>
  );
};

export default Header;
