
import React from 'react';
import heroImage from '../Assets/powerful.png'; // Import your image

const Hero = () => {
  return (
    <div className="w-100 h-50">
      <img 
        src={heroImage} 
        alt="Hero Section" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
