import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header>
          <h1>About Us</h1>
        </header>

        <main>
          <p>
            We're driven to make the path to financial freedom easier. Our
            solution is to simply the process through automation.
          </p>
          <img src="./assets/ycgr.jpg" alt="logo" />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;
