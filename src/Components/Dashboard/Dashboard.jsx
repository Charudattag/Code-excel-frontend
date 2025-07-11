import React from "react";
import Home from "../../Pages/Home";
import Courses from "../../Pages/Otherpages/Courses";
import Instructor from "../../Pages/Instructor/Instructor";
import Testimonials from "../../Pages/Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ background: "#f3f4f6" }}>
      <Home />
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <Courses />
      </div>
      <div className="container-fluid" style={{ marginTop: "10px" }}>
        <Instructor />
      </div>
      <div className="container-fluid">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
