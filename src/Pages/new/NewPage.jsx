import InstructorImage from "../../assets/Instructor/IMG_3852 3.png";
import Instagramlogo from "../../assets/logo/instalogo.png";
import BckgroundImage from "../../assets/Backgroundimages/background.png";
import YoutubeLogo from "../../assets/icons/icons8-youtube-48 (1) 1.svg";
import InstagramLogo from "../../assets/icons/icons8-instagram-48 2.svg";
import LinkedinLogo from "../../assets/icons/icons8-linkedin-48 1.svg";
import Topmatelogo from "../../assets/icons/udpg1suHjRq3SU9U4yKFZ1 2.svg";
import "./NewPage.css";

const NewPage = () => {
  return (
    <div className="newpage-main-container">
      <div className="newpage-content-container">
        <div className="newpage-card">
          <div className="newpage-title-container">
            <h1 className="newpage-title">Primary Instructor</h1>
          </div>
          <div className="newpage-content-row">
            {/* Left Section - Instructor Image */}
            <div className="newpage-image-section">
              <img
                src={InstructorImage}
                alt="Samarth Kulkarni"
                className="newpage-instructor-image"
              />
            </div>

            {/* Right Section - Background with Two Columns */}
            <div
              className="newpage-background-section"
              style={{ backgroundImage: `url(${BckgroundImage})` }}
            >
              <div className="newpage-two-column-section">
                {/* Left Column - Instructor Details */}
                <div className="newpage-details-column">
                  <h2 className="newpage-instructor-name">Samarth Kulkarni</h2>

                  <div className="newpage-roles">
                    <ul>
                      <li>Senior Software Engineer</li>
                      <li>Content Creator</li>
                      <li>Teacher</li>
                    </ul>
                  </div>
                  <div className="newpage-description">
                    Samarth is a Senior Software Engineer and an <br />{" "}
                    Instagram content creator with expertise in Full <br />
                    Stack Development and Artificial Intelligence.
                    <br /> Known for his exceptional explanation skills.
                  </div>
                </div>

                {/* Right Column - Insights */}
                <div className="newpage-insights-column">
                  <h3 className="newpage-insights-title">Insights</h3>

                  <div className="newpage-insights-list">
                    <ul>
                      <li>Featured Topmate's 1% Experts</li>
                      <li>Gained 70,000+ Followers On Instagram</li>
                      <li>Known For His Simplest Explanations</li>
                      <li>Rated 4.9/5 On Topmate (100+ Ratings)</li>
                    </ul>
                  </div>

                  {/* Social Media Links */}
                  <div className="newpage-social-media-links ">
                    <a
                      href="#"
                      className="newpage-social-link newpage-instagram"
                    >
                      <img src={InstagramLogo} alt="Instagram" />
                      <span>samarth.45k</span>
                    </a>
                    <a
                      href="#"
                      className="newpage-social-link newpage-linkedin"
                    >
                      <img src={LinkedinLogo} alt="LinkedIn" />
                      <span>samarth-45k</span>
                    </a>
                    <a
                      href="#"
                      className="newpage-social-link newpage-instagram"
                    >
                      <img src={Topmatelogo} alt="Instagram" />
                      <span>samarth_45k</span>
                    </a>
                    <a href="#" className="newpage-social-link newpage-youtube">
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
    </div>
  );
};

export default NewPage;
