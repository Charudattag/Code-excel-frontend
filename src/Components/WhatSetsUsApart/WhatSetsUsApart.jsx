import React from "react";
import "./WhatSetsUsApart.css";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <div className="card-header">
        <div className="icon-container">
          {icon || (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                fill="white"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
            </svg>
          )}
        </div>
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">{description}</p>
    </div>
  );
};

const WhatSetsUsApart = () => {
  const features = [
    {
      title: "Lifetime Access",
      description:
        "All sessions are recorded and available for lifetime, so you can revise at your own pace.",
    },
    {
      title: "Interview Preparation",
      description:
        "Get trained for real-life conversations and interviews with practice sessions and feedback.",
    },
    {
      title: "Multilingual Courses",
      description:
        "Courses designed for all levels — beginners to advanced — in your preferred language.",
    },
    {
      title: "Affordable Price",
      description:
        "Learn valuable skills without burning a hole in your wallet — because quality education should be for everyone.",
    },
    {
      title: "Detailed Notes",
      description:
        "Get downloadable digital notes with coding tips, assignments, and real-time coding examples.",
    },
    {
      title: "LinkedIn & Resume Setup",
      description:
        "Get expert tips to craft a strong resume and LinkedIn profile that highlights your skills and grabs attention.",
    },
    {
      title: "Career Guidance Tips",
      description:
        "Get personalized career advice, job preparation tips, and strategies to crack interviews in your field.",
    },
    {
      title: "Doubt Support",
      description:
        "Ask questions and get quick, clear answers from mentors — because every doubt matters.",
    },
  ];

  return (
    <div className="what-sets-us-apart">
      <div className="section-header">
        <h2 className="section-title">What Sets Us Apart</h2>
        <p className="section-description">
          We don't just teach — we prepare you for real-world success. From
          lifetime access to sessions, flexible schedules to expert-curated
          notes, and mock interview training — everything is designed to boost
          your confidence and fluency. Learn at your pace, grow on your terms.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatSetsUsApart;
