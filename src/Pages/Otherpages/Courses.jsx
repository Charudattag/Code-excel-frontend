import React, { useState } from "react";
import Card from "../../Components/Coursecard/Card";
import "./Courses.css";
import Image1 from "../../assets/Courses/Image1.jpg";
import Image2 from "../../assets/Courses/imag2.jpg";

const courses = [
  {
    image: Image1,
    title: "C and C++ (Basic to advance)",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "Java (Basic to advance)",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image1,
    title: "Python (Basic to advance)",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "Data Structure Algorithms",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image1,
    title: "Data Science & ML",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "LinkedIn/Resume Set-up",
    rating: 5.0,
    ratingCount: 2,
  },
  // Add more dummy courses if you want to test more rows
  {
    image: Image1,
    title: "Web Development",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "Cloud Computing",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image1,
    title: "Cyber Security",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "UI/UX Design",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image1,
    title: "Mobile App Dev",
    rating: 5.0,
    ratingCount: 2,
  },
  {
    image: Image2,
    title: "Blockchain Basics",
    rating: 5.0,
    ratingCount: 2,
  },
];

const CARDS_PER_ROW = 3;
const ROWS_TO_SHOW = 2;

const Courses = () => {
  const [visibleRows, setVisibleRows] = useState(2);
  const visibleCards = courses.slice(0, visibleRows * CARDS_PER_ROW);
  const canShowMore = visibleCards.length < courses.length;

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + ROWS_TO_SHOW);
  };

  return (
    <div className="courses-main-container">
      <div className="courses-container">
        <div className="courses-title-container">
          <div className="courses-title text-center fw-bold ">
            <div className="courses-title-heading ">
              <h1 className="courses-title-h1">Our Popular Course</h1>
            </div>
            <div className="courses-title-small mt-4">
              <small className="text-muted ">
                Courses That Make You Industry-Ready.
                <br />
                From Basics to Breakthroughs — All in One Place.
              </small>
            </div>
          </div>
        </div>
        <div className="courses-grid">
          {visibleCards.map((course, idx) => (
            <Card key={idx} {...course} />
          ))}
        </div>
        {canShowMore && (
          <div className="courses-see-more-btn-container">
            <button className="courses-see-more-btn" onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
