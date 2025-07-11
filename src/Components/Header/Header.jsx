import React, { useState } from "react";
import logo from "../../assets/logo/Logo.png"; // Make sure you have a logo image at this path
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Logo"
              width="36"
              height="36"
              className="me-2"
              style={{ marginLeft: 30 }}
            />
            <span
              style={{
                color: "#2196f3",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: 1,
              }}
            >
              CODE EXCEL
            </span>
            <span
              style={{
                color: "#2196f3",
                fontWeight: 600,
                marginLeft: 6,
                fontSize: 22,
              }}
            >
              LIVE
            </span>
          </a>

          {/* Mobile Centered Search */}
          <div className="mobile-search-header">
            <form className="d-flex header-search-form">
              <div className="search-input-wrapper">
                <input
                  className="form-control rounded-pill"
                  type="search"
                  placeholder="Search Your Course"
                  aria-label="Search"
                />
                <span className="search-icon">
                  <i
                    className="bi bi-search"
                    style={{ fontSize: 20, color: "#2196f3" }}
                  ></i>
                </span>
              </div>
            </form>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>

          <div
            className={`mobile-menu ${
              isMobileMenuOpen ? "mobile-menu-open" : ""
            }`}
          >
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <a className="nav-link fw-bold text-primary" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faqs">
                  FAQs
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center header-action-btns">
              <a
                href="/login"
                className="btn btn-outline header-btn px-4 fw-bold"
                style={{ border: "1px solid #2196f3", color: "#2196f3" }}
              >
                Login
              </a>
              <a
                href="/signup"
                className="btn btn-outline header-btn px-4 fw-bold ms-2"
                style={{ border: "1px solid #2196f3", color: "#2196f3" }}
              >
                Sign Up
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="navbar-nav gap-5">
              <li className="nav-item">
                <a className="nav-link fw-bold text-primary" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faqs">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex header-search-form desktop-search">
            <div className="search-input-wrapper">
              <input
                className="form-control rounded-pill"
                type="search"
                placeholder="Search Your Course"
                aria-label="Search"
              />
              <span className="search-icon">
                <i
                  className="bi bi-search"
                  style={{ fontSize: 20, color: "#2196f3" }}
                ></i>
              </span>
            </div>
          </form>
          <div className="d-flex align-items-center header-action-btns desktop-buttons">
            <a
              href="/login"
              className="btn btn-outline header-btn px-4 fw-bold"
              style={{ border: "1px solid #2196f3", color: "#2196f3" }}
            >
              Login
            </a>
            <a
              href="/signup"
              className="btn btn-outline header-btn px-4 fw-bold ms-2"
              style={{ border: "1px solid #2196f3", color: "#2196f3" }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
