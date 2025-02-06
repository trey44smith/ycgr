import React from 'react';
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section className="download-section">
    <div className="container">
      <div className="download-content">
        <h2 className="download-title">Download You Can Get Rich Today</h2>
        <p className="download-subtitle">Available on iOS and Android devices</p>
        <div className="store-buttons">
          <button className="store-button">App Store</button>
          <button className="store-button">Google Play</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Download;