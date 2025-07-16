import React from "react";
import "./Upcomingcourses.css";
import coureseImage1 from "../../assets/Courses/imag2.jpg";
import coureseImage2 from "../../assets/Courses/Image1.jpg";

const UpcomingCourses = () => {
  const upcomingCourses = [
    {
      id: 1,
      title: "Web Development (Frontend + Backend)",
      instructor: "Samarth Kulkarni",
      date: "August 28, 2025",
      image: coureseImage1, // Using existing course image
    },
    {
      id: 2,
      title: "Android App Development (Java/Kotlin)",
      instructor: "Samarth Kulkarni",
      date: "September 15, 2025",
      image: coureseImage2, // Using existing course image
    },
  ];

  return (
    <div className="upcoming-courses">
      <div className="upcoming-courses-header">
        <h2 className="upcoming-courses-title">Upcoming Courses</h2>
        <button className="browse-courses-btn">Browse Courses</button>
      </div>

      <div className="upcoming-courses-grid">
        {upcomingCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-details">
              <div className="course-meta">
                <div className="instructor">
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span>{course.instructor}</span>
                </div>
                <div className="date">
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                  <span>{course.date}</span>
                </div>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <button className="see-more-btn">SEE MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCourses;
