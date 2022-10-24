import React, { useState } from "react";
import memesData from "../memesData.js";

const Form = () => {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomArray = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomArray].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="type here"></input>
        <input type="text" placeholder="type here"></input>

        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>

      <div className="memewrap">
        <img className="meme" src={memeImage} />
      </div>
    </main>
  );
};

export default Form;
