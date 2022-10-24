import React from "react";
import Logo from "../images/troll-face.png";

const Header = () => {
  return (
    <header className="head">
      <div className="nav">
        <div className="icon">
          <img src={Logo} alt="icon-meme" className="logo" />
          <p className="title">Meme Generator</p>
        </div>

        <p className="project">React Project</p>
      </div>
    </header>
  );
};

export default Header;
