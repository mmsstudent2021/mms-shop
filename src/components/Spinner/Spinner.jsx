import React from "react";
import './spinner.css'

const Spinnser = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <div className="spinner-center"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Spinnser;
