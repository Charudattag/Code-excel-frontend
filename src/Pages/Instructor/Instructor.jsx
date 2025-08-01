import React from "react";
import "./Instructor.css";
import InstructorImage from "../../assets/Instructor/InstructorImage.jpg";
import Instagramlogo from "../../assets/logo/instalogo.png";
import BckgroundImage from "../../assets/Backgroundimages/Frame 246.png";
import YoutubeLogo from "../../assets/icons/icons8-youtube-48 (1) 1.svg";
import InstagramLogo from "../../assets/icons/icons8-instagram-48 2.svg";
import LinkedinLogo from "../../assets/icons/icons8-linkedin-48 1.svg";
import Topmatelogo from "../../assets/icons/udpg1suHjRq3SU9U4yKFZ1 2.svg";

const Instructor = () => {
  return (
    <div className="instructor-main-container">
      <div className="instructor-title-container text-center fw-bold">
        <h1 className="instructor-title">Primary Instructor</h1>
      </div>
      <div className="instructor-content-container">
        <div className="instructor-card">
          {/* Left Column - Image */}
          <div className="instructor-image-section">
            <img
              src={InstructorImage}
              alt="Samarth Kulkarni"
              className="instructor-image"
            />
          </div>

          {/* Right Column - Background Image Section */}
          <div
            className="instructor-background-section"
            style={{
              backgroundImage: `url(${BckgroundImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Two Column Section Inside Background */}
            <div className="instructor-two-column-section">
              {/* Left Column - Instructor Details */}
              <div className="instructor-details-column">
                <h2 className="instructor-name">Samarth Kulkarni</h2>
                <div className="instructor-roles">
                  <ul>
                    <li>Senior Software Engineer</li>
                    <li>Content Creator</li>
                    <li>Teacher</li>
                  </ul>
                </div>
                <div className="instructor-description">
                  <p>
                    Samarth is a Senior Software Engineer and an Instagram
                    content creator with expertise in Full Stack Development and
                    Artificial Intelligence. Known for his exceptional
                    explanation skills.
                  </p>
                </div>
              </div>

              {/* Right Column - Insights */}
              <div className="instructor-insights-column">
                <h3 className="insights-title">Insights</h3>
                <div className="insights-list">
                  <ul>
                    <li>Featured Topmate's 1% Experts</li>
                    <li>Gained 70,000+ Followers On Instagram</li>
                    <li>Known For His Simplest Explanations</li>
                    <li>Rated 4.9/5 On Topmate (100+ Ratings)</li>
                  </ul>
                </div>
                <div className="social-media-links">
                  <a
                    href="https://www.instagram.com/samarth.45k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <img src={InstagramLogo} alt="Instagram" />
                    <span>samarth.45k</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samarth-45k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                  >
                    <img src={LinkedinLogo} alt="LinkedIn" />
                    <span>samarth-45k</span>
                  </a>
                  <a
                    href="https://topmate.io/samarth_45k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link topmate"
                  >
                    <img src={Topmatelogo} alt="Topmate" />
                    <span>samarth_45k</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@SamarthKulkarnii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link youtube"
                  >
                    <img src={YoutubeLogo} alt="YouTube" />
                    <span>SamarthKulkarnii</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
