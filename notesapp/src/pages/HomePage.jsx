// App.js or HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
       <Navbar />
      {/* Main content wrapper */}
      <main>
        {/* Hero Section */}
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

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Advanced Features for Modern Finances</h2>
              <p className="section-subtitle">Everything you need to take your finances to the next level</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  {/* Add your icon here */}
                </div>
                <h3 className="feature-title">Expense Tracking</h3>
                <p className="feature-description">
                  Track your progress with detailed analytics and performance metrics
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  {/* Add your icon here */}
                </div>
                <h3 className="feature-title">Savings Management</h3>
                <p className="feature-description">
                  Manage your savings and track individual progress
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  {/* Add your icon here */}
                </div>
                <h3 className="feature-title">AI Analysis</h3>
                <p className="feature-description">
                  Get personalized feedback and recommendations based on your finances
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
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

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <h3>Company</h3>
                <div className="footer-links">
                  <a href="#" className="footer-link">About Us</a>
                  <br />
                  <a href="#" className="footer-link">Careers</a>
                  <br />
                  <a href="#" className="footer-link">Contact</a>
                </div>
              </div>
              <div className="footer-column">
                <h3>Features</h3>
                <div className="footer-links">
                  <a href="#" className="footer-link">Skill Tracking</a>
                  <br />
                  <a href="#" className="footer-link">Team Management</a>
                  <br />
                  <a href="#" className="footer-link">AI Analysis</a>
                </div>
              </div>
              <div className="footer-column">
                <h3>Resources</h3>
                <div className="footer-links">
                  <a href="#" className="footer-link">Documentation </a>
                  <br />
                  <a href="#" className="footer-link">Support</a>
                  <br />
                  <a href="#" className="footer-link">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 You Can Get Rich. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;