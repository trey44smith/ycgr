import React from 'react';
import Navbar from '../components/Navbar';  // Adjust the import path based on your file structure

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header>
          <h1>About Us</h1>
        </header>

        <main>
          <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
          <img src="https://via.placeholder.com/300" alt="Placeholder" />
        </main>
      </div>
    </>
  );
}

export default About;