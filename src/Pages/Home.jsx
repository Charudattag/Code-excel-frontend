import React, { useEffect, useState } from "react";
import HomeImage from "../assets/Home/Home.png";
import "./Home.css";

const CountUp = ({ end, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    step();
    // eslint-disable-next-line
  }, [end, duration]);
  return <span>{count}+</span>;
};

const Home = () => {
  return (
    <div className="home-hero-section">
      <div className="container-fluid mt-5 ">
        <div className="row align-items-center mt-3 ">
          <div className="col-md-6 left-content">
            <h1 className="home-title">
              <span className="highlight">
                Master Coding
                <br />
                Skills Smartly
                <br />
                with Code Excel
              </span>
            </h1>
            <p className="home-subtitle">We Just Don’t Teach, We Transform !</p>
            <p className="home-subtitle-subtext">
              Want The Best Programming Experience? Join Us Now !
            </p>
            <div className="home-btn-group ">
              <a href="/courses" className="btn btn-primary home-btn">
                Browse Courses
              </a>
              <a
                href="/signup"
                className="btn btn-outline-primary home-btn ms-2"
              >
                Join Now
              </a>
            </div>
            <div className="home-stats d-flex gap-4">
              <div className="stat-item d-flex flex-column align-items-center">
                <div className="stat-number yellow">
                  <CountUp end={1000} />
                </div>
                <div className="stat-label">
                  Upcoming
                  <br />
                  courses
                </div>
              </div>
              <div className="stat-item d-flex flex-column align-items-center">
                <div className="stat-number blue">
                  <CountUp end={5000} />
                </div>
                <div className="stat-label">
                  Students
                  <br />
                  trained
                </div>
              </div>
              <div className="stat-item d-flex flex-column align-items-center">
                <div className="stat-number orange">
                  <CountUp end={200} />
                </div>
                <div className="stat-label">
                  Mock
                  <br />
                  Interviews
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-image text-center position-relative">
            <div className="blur-overlay"></div>
            <img
              src={HomeImage}
              alt="Students with laptop"
              className=" home-main-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
