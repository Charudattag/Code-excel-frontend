import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div
      className="loader-container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <DotLottieReact
        src="https://lottie.host/bbaff384-92ea-481d-b192-2497ca693908/cYTkvLi0v4.lottie"
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default Loader;
