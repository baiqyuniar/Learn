import React from "react";
import Star from "../images/star.png";

const Card = (props) => {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div id="card">
      {{ badgeText } && <div className="badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.item.coverImg}`)}
        className="person"
      />

      <div className="wrapper">
        <img src={Star} alt="rating" className="rate" />
        <span>{props.item.stats.rating}</span>
        <span className="grey"> {props.item.stats.reviewCount} • </span>
        <span className="grey">{props.item.location}</span>
      </div>

      <div className="info">
        <p>{props.item.title}</p>
        <p>
          <span className="price">From ${props.item.price} /</span> person{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
