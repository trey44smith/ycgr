// App.js or HomePage.js
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Main content wrapper */}
      <main>
        <Hero />

        <Features />

        <Download />

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
