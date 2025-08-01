import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Coursecard/Card";
import "./Courses.css";
import { getAllCoursesAPI, IMG_URL } from "../../API/Api";
import Image1 from "../../assets/Courses/Image1.jpg";
import Image2 from "../../assets/Courses/imag2.jpg";
import instructorImage from "../../assets/Instructor/InstructorImage.jpg";

const CARDS_PER_ROW = 3;
const ROWS_TO_SHOW = 2;

const Courses = () => {
  const [visibleRows, setVisibleRows] = useState(2);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getAllCoursesAPI();

        if (response.success) {
          const transformedCourses = response.data.courses.map((course) => ({
            id: course.id,
            image: course.banner
              ? `${IMG_URL}/uploads/${course.banner}`
              : course.media && course.media.length > 0
              ? `${IMG_URL}/uploads/${course.media[0].name}`
              : Image1,
            title: course.name,
            rating: 5.0,
            ratingCount: 100,
            instructor: "Samarth Kulkarni",
            instructorImage: instructorImage,
            lessons: course.sections?.length || 0,
            duration: course.duration || "8h 30m",
            description: course.description,
            enrolledCount: "1,000+",
            aboutCourse: course.description,
            skills: course.prerequisites || [],
            learningModules:
              course.sections?.map((section) => ({
                title: section.name,
                description: section.description,
              })) || [],

            originalData: course,
          }));

          setCourses(transformedCourses);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Error loading courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const visibleCards = courses.slice(0, visibleRows * CARDS_PER_ROW);
  const canShowMore = visibleCards.length < courses.length;

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + ROWS_TO_SHOW);
  };

  const handleCourseClick = (course) => {
    // Navigate to course details using slug
    navigate(`/course-details/${course.originalData.slug}`);
  };

  if (loading) {
    return (
      <div className="courses-main-container">
        <div className="courses-container">
          <div className="courses-title-container">
            <div className="courses-title text-center fw-bold">
              <div className="courses-title-heading">
                <h1 className="courses-title-h1">Our Popular Course</h1>
              </div>
              <div className="courses-title-small mt-4">
                <small className="text-muted">Loading courses...</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-main-container">
        <div className="courses-container">
          <div className="courses-title-container">
            <div className="courses-title text-center fw-bold">
              <div className="courses-title-heading">
                <h1 className="courses-title-h1">Our Popular Course</h1>
              </div>
              <div className="courses-title-small mt-4">
                <small className="text-muted">{error}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <div key={course.id} onClick={() => handleCourseClick(course)}>
              <Card {...course} />
            </div>
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
