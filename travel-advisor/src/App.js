import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Place from "./components/Place";

function App() {
  return (
    <div>
      <Header />

      <div className="grid--container">
        <div className="grid--places">
          <Place />
        </div>

        <div className="grid--maps">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
