import React from "react";
import Logo from "./image/react-icon-small.png";
const Header = () => {
  return (
    <header width="500px">
      <nav className="navbar">
        <div className="fact">
          <img src={Logo} alt="React-icon" className="logo" />
          <h3>ReactFacts</h3>
        </div>

        <h4>React Project</h4>
      </nav>
    </header>
  );
};

export default Header;
