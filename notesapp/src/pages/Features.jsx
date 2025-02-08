import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header>
          <h1>Features</h1>
        </header>

        <main>
          <p>
            Welcome to my simple React home page! This is a basic example of a
            React project.
          </p>
          <img src="./assets/ycgr.jpg" alt="logo" />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Features;
