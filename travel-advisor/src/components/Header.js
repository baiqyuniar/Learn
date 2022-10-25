import React, { useState } from "react";
import axios from "axios";

const Header = () => {
  const [onSearch, setOnSearch] = useState("");
  console.log(onSearch);

  const enterKey = (e) => {
    if (e.key === "Enter") {
      alert("hello");
    }
  };

  return (
    <header>
      <h2>Travel Advisor</h2>
      <div className="search">
        <h4>Explore new places</h4>
        <input
          type="serach"
          placeholder="Search ..."
          value={onSearch}
          onChange={(e) => {
            setOnSearch(e.target.value);
          }}
          onKeyDown={enterKey}
        />
      </div>
    </header>
  );
};

export default Header;
