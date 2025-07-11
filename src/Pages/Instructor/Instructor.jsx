import React from "react";
import "./Instructor.css";
import InstructorImage from "../../assets/Instructor/InstructorImage.jpg";
import Instagramlogo from "../../assets/logo/instalogo.png";

const Instructor = () => {
  return (
    <div className="instructor-main-container">
      <div className="instructor-title-container text-center fw-bold">
        <h1 className="instructor-title">Meet Your Instructor</h1>
      </div>
      <div className="instructor-content-container">
        <div className="instructor-image-wrapper mt-4">
          <img
            src={InstructorImage}
            alt="Instructor"
            className="instructor-image"
          />
        </div>
        <div className="instructor-info-wrapper">
          <h2 className="instructor-name">Samarth Kulkarni</h2>
          <div className="instructor-subtitle">
            Senior Software Developer | Content Creator | Mentor
          </div>
          <div className="instructor-description">
            <p>
              With a passion for teaching and a deep understanding
              <br />
              of modern tech, Samarth Kulkarni brings both
              <br />
              experience and energy to every session.
            </p>
            <p>
              As a Senior Software Developer and trusted coding
              <br />
              mentor, he has helped future-ready coders to launch
              <br />
              their careers.
            </p>
            <p>
              His content has inspired 50,000+ learners on Instagram,
              <br />
              where he shares real-world coding tips, career advice,
              <br />
              and motivation for aspiring developers.
            </p>
          </div>
          <a
            href="https://www.instagram.com/samarth.45k?igsh=MW5ldm1wMTQ3YTg4bQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="instructor-instagram-btn"
          >
            <span className="insta-icon">
              <img
                src={Instagramlogo}
                alt="Instagram"
                className="instagram-logo-img"
              />
            </span>
            Follow on Instagram: samarth.45k
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
