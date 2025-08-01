import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo/newlogo.png";

const Footer = () => {
  return (
    <footer className="footer-main ">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <div className="footer-logo-row">
            <img src={Logo} alt="Code Excel Logo" className="footer-logo-img" />
          </div>
          <span className="footer-logo-text">CodeExcel Live</span>
          <div className="footer-tagline">
            Master Coding Skills Smartly
            <br /> Rule The Future!
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
          <div className="footer-section mt-5">
            <div className="footer-col-title">Join Us</div>
            <ul className="footer-list">
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/">Register Now</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Explore</div>
          <ul className="footer-list">
            <li>
              <a href="/about">Courses</a>
            </li>
            <li>
              <a href="/courses">Reviews</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Connect</div>
          <ul className="footer-list">
            <li>
              WhatsApp
              <li>+91 9175596004</li>
            </li>
            <li>
              Email
              <li>
                codeexcellive@gmail.com
                <li>support.codeexcel@gmail.com</li>
              </li>
            </li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-copyright">
        Copyright © {new Date().getFullYear()} CodeExcel Live. All rights
        reserved. Terms and Conditions
      </div>
    </footer>
  );
};

export default Footer;
