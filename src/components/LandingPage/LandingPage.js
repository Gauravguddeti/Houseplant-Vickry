import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  console.log('LandingPage component is rendering');
  
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Houseplant Vickry</h1>
          <p className="company-description">
            At Houseplant Vickry, we believe that every home deserves the beauty and tranquility 
            that plants bring. Founded with a passion for green living, we specialize in carefully 
            curated houseplants that not only beautify your space but also purify your air and 
            enhance your well-being. From low-maintenance succulents perfect for beginners to 
            exotic flowering plants for experienced gardeners, we offer a diverse collection to 
            suit every lifestyle and space. Our mission is to make plant parenthood accessible 
            and enjoyable for everyone, providing healthy, vibrant plants along with expert care 
            guidance to help your green friends thrive.
          </p>
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
