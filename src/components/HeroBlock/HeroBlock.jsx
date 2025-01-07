import React from 'react';
import './HeroBlock.css';
import heroImage from '../../assets/sweater-shirt.webp';

const HeroBlock = () => {
  return (
    <div id='home' className="hero-block">
      <div className="hero-img">
        <img className="h-image" src={heroImage} alt="Discover the best deals at MyStore" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to MyStore</h1>
        <p className="hero-subtitle">
          Discover the best deals and high-quality products, all in one place!
        </p>
        <a href="#products" className="btn btn-primary">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroBlock;
