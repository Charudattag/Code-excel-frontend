import React, { useState } from "react";
import "./ContactUsPage.css";
import mailimage from "../../assets/icons/newiconofemail.svg";
import phoneimage from "../../assets/icons/phone-504.png";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    query: "",
  });

  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "query") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <div className="contact-us-content-inner">
          {/* Header */}
          <div className="contact-header">
            <h1 className="contact-title">Contact Us</h1>
          </div>

          {/* Introductory Text */}
          <div className="contact-intro">
            <p className="intro-text">
              Lets get connected ! Please put your query
            </p>
            <h2 className="send-message-title">Send us a message</h2>
            <p className="intro-description">
              If you have any questions regarding any of our courses and live
              programming batches, you can send us a direct message. Its our
              pleasure to help you!
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-columns">
              {/* Left Column */}
              <div className="form-left-column">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Please enter first name..."
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Please enter your email..."
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="query" className="form-label">
                    WHAT DO YOU HAVE IN MIND?
                  </label>
                  <div className="textarea-container">
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      placeholder="Please enter your query..."
                      className="form-textarea"
                      maxLength={1000}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="form-right-column">
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Please enter last name..."
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsappNumber" className="form-label">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    placeholder="Please enter your number..."
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <img src={phoneimage} alt="phone" />
              </div>
              <div className="contact-info">
                <p className="contact-value">+91 9175596004</p>
                <p className="contact-value">+91 9175596004</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={mailimage} alt="mail" />
              </div>
              <div className="contact-info">
                <p className="contact-value">codeexcellive@gmail.com</p>
                <p className="contact-value">support.codeexcel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
