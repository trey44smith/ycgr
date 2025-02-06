import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Financial Freedom Starts Here</h1>
              <p className="hero-subtitle">
                AI-powered financial consulting for every stage of your life. Track your spending, 
                increase your savings, and maximize your financial potential.
              </p>
              <div className="hero-buttons">
                <a href = "https://us-west-183hnjl26y.auth.us-west-1.amazoncognito.com/login?client_id=sk0ptefi5rnd1rj6r4gg83bgd&redirect_uri=http://localhost:5173/&response_type=code&scope=email+openid+phone">
                <button className="primary-button">Get Started</button>
                </a>
                <button className="secondary-button">Watch Demo</button>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Hero;