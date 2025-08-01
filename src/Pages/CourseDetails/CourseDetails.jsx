import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import joinNowImage from "../../assets/Courses/joinNow.jpg";
import instructorImage from "../../assets/Instructor/InstructorImage.jpg";
import Header from "../../Components/Header/Header";
import "./CourseDetails.css";
import WhatSetsUsApart from "../../Components/WhatSetsUsApart/WhatSetsUsApart";
import Testimonials from "../Testimonials/Testimonials";
import UpcomingCourses from "../UpcomingCourses/UpcomingCourses";
import Footer from "../../Components/Footer/Footer";
import { getCourseBySlugAPI, IMG_URL } from "../../API/Api";

const CourseDetails = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await getCourseBySlugAPI(slug);
        if (response.success) {
          setCourse(response.data);
        } else {
          setError("Course not found");
        }
      } catch (err) {
        setError("Failed to load course");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  if (loading) {
    return (
      <div className="course-details-container">
        <Header />
        <div className="course-details-content mt-5">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
  if (error || !course) {
    return (
      <div className="course-details-container">
        <Header />
        <div className="course-details-content mt-5">
          <h2>{error || "Course not found"}</h2>
        </div>
      </div>
    );
  }

  // Get image from media array or fallback
  const courseImage = course.banner
    ? `${IMG_URL}/uploads/${course.banner}`
    : joinNowImage;

  return (
    <div className="course-details-container">
      <Header />
      <div className="course-details-content mt-5">
        <div className="course-details-left">
          <div className="course-title-section">
            <h1 className="course_title">{course.name}</h1>
            <p className="course-description">{course.description}</p>
          </div>

          <div className="instructor-section">
            <div className="instructor-info">
              <div className="instructor-avatar">
                <img
                  src={instructorImage}
                  alt="Instructor"
                  className="instructorimage"
                />
              </div>
              <div className="instructor-details">
                <h3 className="instructor_name">Samarth Kulkarni</h3>
                <span className="instructor-label">Instructor</span>
              </div>
            </div>
          </div>

          <div className="course-stats-section">
            <div className="stats-row">
              <div className="rating-stats">
                <div className="stars">★★★★★</div>
                <span className="rating-value">5.0</span>
                <span className="rating-count">(100 ratings)</span>
              </div>
              <div className="lessons-stats">
                <i className="bi bi-journal-text stats-icon"></i>
                <span className="stats-text">
                  {course.sections?.length || 0} Lessons
                </span>
              </div>
              <div className="duration-stats">
                <i className="bi bi-clock stats-icon"></i>
                <span className="stats-text">
                  {course.duration || "8h 30m"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-details-right">
          <div className="course-image-container">
            <img
              src={courseImage}
              alt="Course Preview"
              className="course-preview-image"
            />
          </div>
        </div>
      </div>

      <div className="About-course-section">
        <div className="full-width-sections ">
          <div className="about-course-section">
            <div className="section-container mt-2">
              <h2 className="about-course-title text-center">
                About This Course
              </h2>
              <p className="about-course-description mt-2">
                {course.description}
              </p>
            </div>
          </div>

          <div className="skills-section">
            <div className="section-container">
              <h2 className="skills-title">Skills you'll gain</h2>
              <div className="skills-container">
                {course.prerequisites &&
                  course.prerequisites.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                <a href="#" className="view-all-skills-link">
                  View all skills
                </a>
              </div>
            </div>
          </div>
          <div className="full-width-sections">
            <div className="course-learning-section">
              <h2 className="course-learning-title text-center">
                What You'll Learn
              </h2>
              <div className="learning-modules-list">
                {course.outcomes && course.outcomes.length > 0 ? (
                  // Split outcomes into two columns
                  Array.from({
                    length: Math.ceil(course.outcomes.length / 2),
                  }).map((_, rowIdx) => (
                    <React.Fragment key={rowIdx}>
                      {/* Left column (odd index) */}
                      {course.outcomes[rowIdx * 2] && (
                        <div className="learning-module-item">
                          <div className="module-arrow"></div>
                          <div className="module-content">
                            {(() => {
                              const outcome = course.outcomes[rowIdx * 2];
                              const [boldPart, ...rest] = outcome.split("-");
                              return (
                                <span className="module-title">
                                  <b>{boldPart.trim()}</b>
                                  {rest.length > 0 && (
                                    <span> - {rest.join("-").trim()}</span>
                                  )}
                                </span>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                      {/* Right column (even index) */}
                      {course.outcomes[rowIdx * 2 + 1] && (
                        <div className="learning-module-item">
                          <div className="module-arrow"></div>
                          <div className="module-content">
                            {(() => {
                              const outcome = course.outcomes[rowIdx * 2 + 1];
                              const [boldPart, ...rest] = outcome.split("-");
                              return (
                                <span className="module-title">
                                  <b>{boldPart.trim()}</b>
                                  {rest.length > 0 && (
                                    <span> - {rest.join("-").trim()}</span>
                                  )}
                                </span>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <div>No outcomes listed.</div>
                )}
              </div>
            </div>
          </div>

          {/* What Sets Us Apart Section */}
          <div className="what-sets-us-apart-section">
            <WhatSetsUsApart />
          </div>
          <div className="testimonials-section">
            <Testimonials />
          </div>
          <div className="upcoming-courses-section">
            <UpcomingCourses />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
