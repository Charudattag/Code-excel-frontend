import React, { useState } from "react";
import "./Testimonials.css";
import TestimonialCard from "../../Components/TestimonialCard/Testimonialcard";
import Testimonial1 from "../../assets/Testimonial/testi1.jpg";
import Testimonial2 from "../../assets/Testimonial/testi2.jpg";
import Testimonial3 from "../../assets/Testimonial/testi3.jpg";
import Background from "../../assets/Backgroundimages/Frame 246.png";

const testimonials = [
  {
    title: "Great Experience",
    text: "Code Excel completely changed the way I understood Java. The one-on-one mentorship helped me crack my first interview with confidence!",
    userImage: Testimonial1,
    userName: "Prachi Patil",
    userDegree: "B.Tech CSE",
    rating: 5,
  },
  {
    title: "Highly Recommended",
    text: "The sessions are well-structured, and I loved how the instructor explained every concept in Marathi. Perfect for regional learners like me!",
    userImage: Testimonial2,
    userName: "Rohit Sharma",
    userDegree: "MCA",
    rating: 5,
  },
  {
    title: "Amazing Support",
    text: "From live classes to lifetime access recordings, everything was worth it. I now feel ready for real-world coding challenges !",
    userImage: Testimonial3,
    userName: "Amit Deshmukh",
    userDegree: "Fresher",
    rating: 5,
  },
];

const Testimonials = () => {
  const [focused, setFocused] = useState(1); // center card focused by default

  return (
    <div className="testimonials-main-container">
      <div className="testimonials-title-container-outer ">
        <div className="testimonials-title-container text-center fw-bold">
          <h1 className="testimonials-title">Hear From Our Students</h1>
          <p className="testimonials-subtitle ">
            Real stories !
            <br /> Directly from those who’ve experienced Code Excel. <br />{" "}
          </p>
        </div>
      </div>
      <div className="testimonials-cards-row ">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`testimonial-card-outer mt-4 ${
              focused === i ? "focused" : "unfocused"
            }`}
            onMouseEnter={() => setFocused(i)}
            onMouseLeave={() => setFocused(1)}
          >
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
