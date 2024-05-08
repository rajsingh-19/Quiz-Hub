import React from "react";
import ReactDOM from "react-dom";
import "../Loader/Loader.css";

const Loader = () => {
  return ReactDOM.createPortal(
    <>
      <div className="loader-overlay">
        <div className="loading-dots">
          <div className="text3">Loading</div>
          <div className="loading-dots-dot"></div>
          <div className="loading-dots-dot"></div>
          <div className="loading-dots-dot"></div>
        </div>
      </div>
    </>,
    document.getElementById("loader-root")
  );
};

export default Loader;
