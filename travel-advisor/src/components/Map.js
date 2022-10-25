import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import P from "leaflet";

const Map = () => {
  const marker = P.icon({
    iconUrl: require("../images/placeholder.png"),
    iconSize: [25, 25],
  });
  return (
    <MapContainer
      center={[-6.2, 106.816666]}
      zoom={11}
      style={{ widows: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=aHf9qZr438nyFzx9lT1p"
      />
      <Marker position={[-6.15, 106.82]} icon={marker}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
