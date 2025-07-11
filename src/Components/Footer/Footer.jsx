import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo/Logo.png";

const Footer = () => {
  return (
    <footer className="footer-main ">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <div className="footer-logo-row">
            <img src={Logo} alt="Code Excel Logo" className="footer-logo-img" />
            <span className="footer-logo-text">
              CODE EXCEL <span className="footer-live">Live</span>
            </span>
          </div>
          <div className="footer-tagline">
            Master the Code.
            <br />
            Rule the Future.
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Links</div>
          <ul className="footer-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Resource</div>
          <ul className="footer-list">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contacts</div>
          <ul className="footer-list">
            <li>Pune, MH, IND</li>
            <li>Ping Me</li>
            <li>+91 9175596004</li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        Copyright © 2025 | Powered by CODE EXCEL
      </div>
    </footer>
  );
};

export default Footer;
