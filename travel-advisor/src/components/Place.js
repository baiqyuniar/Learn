import React from "react";

const Place = () => {
  return (
    <div>
      <h2>Food & Dining around you</h2>
      <div className="dropdown">
        <div>
          <span>Type</span>
          <div className="select">
            <select>
              <option>Resturants</option>
              <option>Hotels</option>
              <option>Attractions</option>
            </select>
            <div className="select_arrow"></div>
          </div>
        </div>

        <div>
          <span>Rating</span>
          <div className="select">
            <select>
              <option>Above 3.0</option>
              <option>Above 4.0</option>
              <option>Above 4.5</option>
            </select>
            <div className="select_arrow"></div>
          </div>
        </div>
      </div>

      <div className="card">
        <div>
          <img
            src="https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            alt="Avatar"
            width="100%"
          />
        </div>
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Place;
