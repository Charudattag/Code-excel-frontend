import React from "react";
import { useLocation, useParams } from "react-router-dom";
import joinNowImage from "../../assets/Courses/joinNow.jpg";
import instructorImage from "../../assets/Instructor/InstructorImage.jpg";
import Header from "../../Components/Header/Header";
import "./CourseDetails.css";
import WhatSetsUsApart from "../../Components/WhatSetsUsApart/WhatSetsUsApart";
import Testimonials from "../Testimonials/Testimonials";
import UpcomingCourses from "../UpcomingCourses/UpcomingCourses";
import Footer from "../../Components/Footer/Footer";

const CourseDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const courseData = location.state?.courseData;

  // Default course data if none is passed
  const defaultCourse = {
    title: "Python for Everybody Specialization",
    description:
      "Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.",
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    rating: 5.0,

    ratingCount: 1024,
    lessons: 25,
    duration: "6h 45m",
    enrolledCount: "1,808,329",
    aboutCourse:
      "Java Masters is a beginner-friendly course designed to build a strong foundation in Java programming. From core concepts to real-world applications, learners will gain hands-on experience with OOP, data structures, and backend logic. The course includes interactive modules and mini-projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for Java-based roles.",
    skills: [
      "Database Design",
      "Database Systems",
      "Data Processing",
      "Data Structures",
      "Programming Principles",
      "SQL",
      "Restful API",
      "Relational Databases",
      "Data Visualization",
      "Web Scraping",
      "Database Management",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  };

  const course = courseData || defaultCourse;

  return (
    <div className="course-details-container">
      <Header />
      <div className="course-details-content mt-5">
        <div className="course-details-left">
          <div className="course-title-section">
            <h1 className="course_title">{course.title}</h1>
            <p className="course-description">{course.description}</p>
          </div>

          <div className="instructor-section">
            <div className="instructor-info">
              <div className="instructor-avatar">
                <img
                  src={course.instructorImage || instructorImage}
                  alt="Instructor"
                  className="instructorimage"
                />
              </div>
              <div className="instructor-details">
                <h3 className="instructor_name">{course.instructor}</h3>
                <span className="instructor-label">Instructor</span>
              </div>
            </div>
          </div>

          <div className="course-stats-section">
            <div className="stats-row">
              <div className="rating-stats">
                <div className="stars">★★★★★</div>
                <span className="rating-value">{course.rating.toFixed(1)}</span>
                <span className="rating-count">
                  ({course.ratingCount} rating)
                </span>
              </div>
              <div className="lessons-stats">
                <i className="bi bi-journal-text stats-icon"></i>
                <span className="stats-text">{course.lessons} Lessons</span>
              </div>
              <div className="duration-stats">
                <i className="bi bi-clock stats-icon"></i>
                <span className="stats-text">{course.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-details-right">
          <div className="course-image-container">
            <img
              src={joinNowImage}
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
                {course.aboutCourse}
              </p>
            </div>
          </div>

          <div className="skills-section">
            <div className="section-container">
              <h2 className="skills-title">Skills you'll gain</h2>
              <div className="skills-container">
                {course.skills &&
                  course.skills.map((skill, index) => (
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
                <div className="learning-modules-left">
                  {course.learningModules &&
                    course.learningModules.slice(0, 5).map((module, index) => (
                      <div key={index} className="learning-module-item">
                        <div className="module-arrow"></div>
                        <div className="module-content">
                          <span className="module-title">{module.title}</span>
                          <span className="module-description">
                            {" "}
                            – {module.description}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="learning-modules-right">
                  {course.learningModules &&
                    course.learningModules.slice(5, 9).map((module, index) => (
                      <div key={index + 5} className="learning-module-item">
                        <div className="module-arrow"></div>
                        <div className="module-content">
                          <span className="module-title">{module.title}</span>
                          <span className="module-description">
                            {" "}
                            – {module.description}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
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
