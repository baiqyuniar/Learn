import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const Header = () => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    }
  };

  return (
    <header>
      <h2>Travel Advisor</h2>
      <div className="search">
        <h4>Explore new places</h4>
        <LoadScript
          googleMapsApiKey={["AIzaSyAGaAxw9Z2DO1fUU1TCteyqyQfzONFrsjY"]}
          libraries={["places"]}
        >
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input type="serach" placeholder="Search ..." />
          </StandaloneSearchBox>
        </LoadScript>
      </div>
    </header>
  );
};

export default Header;
