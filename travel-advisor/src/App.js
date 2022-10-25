import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Place from "./components/Place";
import AutoComplete from "./components/AutoComplete";

function App() {
  return (
    <div>
      <Header />

      <div class="grid--container">
        <div class="grid--places">
          <Place />
        </div>

        <div class="grid--maps">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
