import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Financial Freedom Starts Here</h1>
          <p className="hero-subtitle">
            AI-powered financial consulting for every stage of your life. Track
            your spending, increase your savings, and maximize your financial
            potential.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="nav-link">
              <button className="primary-button">Get Started</button>
            </Link>
            <button className="secondary-button">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
