import React from 'react';
import { Link } from "react-router-dom";

const Features = () => {
  return (
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
  );
};

export default Features;