import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Company</h3>
          <div className="footer-links">
             <Link to="/about" className="nav-link">About</Link>
            <br />
            <a href="#" className="footer-link">Careers</a>
            <br />
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Features</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Expense Tracking</a>
            <br />
            <a href="#" className="footer-link">Savings Management</a>
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
  );
};

export default Footer;