import React from "react";
import Pict from "../images/photo-grid.png";

const Hero = () => {
  return (
    <section id="hero">
      <img src={Pict} alt="travel" className="pict" />

      <div>
        <h1>Online Experiences</h1>

        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
