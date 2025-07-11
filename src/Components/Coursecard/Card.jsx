import React from "react";
import "./Card.css";

const Card = ({
  image,
  title,
  rating = 5.0,
  ratingCount = 2,
  buttonText = "Enroll Now",
}) => {
  return (
    <div className="custom-card">
      <img src={image} alt={title} className="custom-card-image" />
      <div className="custom-card-content">
        <h3 className="custom-card-title">{title}</h3>
        <div className="custom-card-rating-row">
          <span className="custom-card-stars">{"★".repeat(5)}</span>
          <span className="custom-card-rating-value">{rating.toFixed(1)}</span>
          <span className="custom-card-rating-count">
            ({ratingCount} rating{ratingCount > 1 ? "s" : ""})
          </span>
        </div>
        <button className="custom-card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
