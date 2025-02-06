import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          You Can Get Rich
        </Link>
        
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#team-training" className="nav-link">Memberships</a>
          <Link to="/about" className="nav-link">About</Link>
          <a href="https://us-west-183hnjl26y.auth.us-west-1.amazoncognito.com/login?client_id=sk0ptefi5rnd1rj6r4gg83bgd&redirect_uri=http://localhost:5173/&response_type=code&scope=email+openid+phone" 
             className="download-button">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;