import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const AutoComplete = () => {
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
    <LoadScript
      googleMapsApiKey={["AIzaSyAGaAxw9Z2DO1fUU1TCteyqyQfzONFrsjY"]}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={(ref) => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Location"
        />
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default AutoComplete;
