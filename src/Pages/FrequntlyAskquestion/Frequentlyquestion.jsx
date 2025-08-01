import React, { useState } from "react";
import "./Frequentlyquestion.css";
import downarrow from "../../assets/icons/downarrow.png";

const Frequentlyquestion = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqData = [
    {
      id: 1,
      number: "01",
      question: "What Is CodeExcel Live?",
      answer:
        "CodeExcel Live is an edtech platform dedicated to delivering high-quality, live programming courses at the most affordable prices. Focused on practical learning, we offer live sessions, lifetime access to recordings, mock interviews, doubt-solving, and career-focused guidance.",
    },
    {
      id: 2,
      number: "02",
      question: "Who Can Join Our Courses ?",
      answer:
        "Anyone with a passion for programming can join our courses! Whether you're a complete beginner, a student, a working professional, or someone looking to switch careers, our courses are designed to accommodate all skill levels. We welcome students from all backgrounds and experience levels.",
    },
    {
      id: 3,
      number: "03",
      question: "Are The Sessions Live Or Recorded ?",
      answer:
        "We offer both live sessions and recorded content. Our live sessions provide real-time interaction with instructors and fellow students, while recorded sessions are available for lifetime access. This combination ensures you never miss important content and can learn at your own pace.",
    },
    {
      id: 4,
      number: "03",
      question: "Is There Any Doubt Solving Support ?",
      answer:
        "Yes, we provide comprehensive doubt-solving support! Our dedicated team of instructors and mentors are available to help you with any questions or challenges you face during your learning journey. We offer multiple channels for doubt resolution including live Q&A sessions, discussion forums, and one-on-one mentoring.",
    },
    {
      id: 5,
      number: "04",
      question: "How To Enroll ?",
      answer:
        "Enrolling is simple! Visit our website, browse through our course catalog, select the course that interests you, and click the 'Enroll Now' button. Follow the registration process, complete the payment, and you'll receive immediate access to your course materials and live session schedule.",
    },
    {
      id: 6,
      number: "05",
      question: "Can I Host My Own Course ?",
      answer:
        "Currently, we focus on providing high-quality courses from our expert instructors. However, we're always looking for talented educators to join our platform. If you're interested in teaching with us, please contact our team with your credentials and course proposal.",
    },
    {
      id: 7,
      number: "06",
      question: "Is The Access For Recordings Limited ?",
      answer:
        "No, access to recordings is not limited! Once you enroll in a course, you get lifetime access to all recorded sessions, study materials, and practice exercises. You can revisit the content anytime, anywhere, and continue learning at your own pace without any time restrictions.",
    },
    {
      id: 8,
      number: "07",
      question: "How To Contact Support Team ?",
      answer:
        "You can contact our support team through multiple channels: Email us at support@codeexcel.com, call us at +91 9175596004, or use the contact form on our website. Our support team is available Monday to Friday, 9 AM to 6 PM IST, and we typically respond within 24 hours.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="frequently-question-container">
      <div className="frequently-question-content">
        {/* Header Section */}
        <div className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-underline"></div>
          <p className="faq-intro">
            Here you will get top 7 questions and if you have some other query,
            please feel free to fill the contact form above
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="faq-list-container ">
          {faqData.map((item, index) => (
            <div key={item.id} className="faq-item">
              <div
                className="faq-question-row"
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-number">{item.number}</div>
                <div className="faq-question">{item.question}</div>
                <div
                  className={`faq-icon ${openIndex === index ? "open" : ""}`}
                >
                  <img src={downarrow} alt="arrow" className="faq-arrow-icon" />
                </div>
              </div>

              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}

              {index < faqData.length - 1 && (
                <div className="faq-separator"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequentlyquestion;
