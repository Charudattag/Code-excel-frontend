import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.scss";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Show loader for 500ms
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className="dashboard d-flex flex-column"
      // style={{ minHeight: "100vh" }}
    >
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div
          className="content-area"
          style={{ backgroundColor: "#f0f0f1", flex: 1 }}
        >
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Layout;
