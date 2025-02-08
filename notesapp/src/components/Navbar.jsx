import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          You Can Get Rich
        </Link>

        <div className="nav-links">
          <Link to="/features" className="nav-link">
            Features
          </Link>
          <Link to="/memberships" className="nav-link">
            Memberships
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/signup" className="nav-link">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
