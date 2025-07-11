import React from "react";
import "./Testimonialcard.css";

const TestimonialCard = ({
  title,
  text,
  userImage,
  userName,
  userDegree,
  rating,
}) => {
  return (
    <div className="testimonial-card">
      {title && <div className="testimonial-title">{title}</div>}
      <div className="testimonial-quote-mark">&#10075;</div>
      {text && <div className="testimonial-text">{text}</div>}

      <div className="testimonial-user-row">
        {userImage && (
          <img
            src={userImage}
            alt={userName}
            className="testimonial-user-img"
          />
        )}
        <div className="testimonial-user-info">
          <div className="testimonial-user-name">
            {userName}
            {userDegree && (
              <span className="testimonial-user-degree">, {userDegree}</span>
            )}
          </div>
          <div className="testimonial-stars">
            {rating &&
              Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="testimonial-star">
                  &#9733;
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
