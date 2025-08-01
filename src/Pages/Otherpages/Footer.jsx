import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        {/* Leftmost Column - Branding */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <div className="footer-logo-circle">
              <div className="footer-logo-text-inner">
                <span>CODE</span>
                <span>EXCEL</span>
              </div>
            </div>
            <span className="footer-live">LIVE</span>
          </div>
          <h2 className="footer-brand-title">CodeExcel Live</h2>
          <p className="footer-tagline">
            Master Coding Skills Smartly
            <br />
            Rule The Future!
          </p>
        </div>

        {/* Second Column - Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">Links</h3>
          <ul className="footer-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/testimonials">Topmate Testimonials</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Third Column - Explore & Join Us */}
        <div className="footer-col">
          <div className="footer-section">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-list">
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-col-title">Join Us</h3>
            <ul className="footer-list">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register Now</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rightmost Column - Connect */}
        <div className="footer-col">
          <h3 className="footer-col-title">Connect</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">+91 9175596004</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">codeexcellive@gmail.com</span>
              <span className="contact-value">support.codeexcel@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section - Footer Details */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <div className="footer-build">Build 27 July 2025 12:45:21</div>
          <div className="footer-copyright">
            Copyright © 2025 CodeExcel Live. All rights reserved. Terms and
            Conditions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
