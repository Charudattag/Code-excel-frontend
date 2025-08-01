import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Loader from "./Components/Loader/Loader";
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const CourseDetails = lazy(() => import("./Pages/CourseDetails/CourseDetails"));
const Layout = lazy(() => import("./Components/Layout/Layout"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/course-details/:slug" element={<CourseDetails />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </Router>
  );
}

export default App;
