import React from "react";
import Home from "../../Pages/Home";
import Courses from "../../Pages/Otherpages/Courses";
import Instructor from "../../Pages/Instructor/Instructor";
import NewPage from "../../Pages/new/NewPage";
import Testimonials from "../../Pages/Testimonials/Testimonials";
import ContactUs from "../../Pages/Contact-us/ContactUsPage";
import Frequentlyquestion from "../../Pages/FrequntlyAskquestion/Frequentlyquestion";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ background: "#f3f4f6" }}>
      <Home />
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <Courses />
      </div>
      <div className="container-fluid">
        <Testimonials />
      </div>
      <div className="container-fluid">
        <NewPage />
      </div>
      <div className="container-fluid">
        <ContactUs />
      </div>
      <div className="container-fluid">
        <Frequentlyquestion />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
