import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#5A189A] to-[#FF69B4] text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">Celebrating Mothers & Women</h1>
      <p className="text-xl mb-10">Honor the incredible women who shape our world</p>
      <div className="flex justify-center space-x-6">
        <a 
          href="#poem-generator" 
          className="bg-[#FFD700] text-[#5A189A] px-6 py-3 rounded-full hover:bg-opacity-90 transition"
        >
          Generate a Poem
        </a>
        <a 
          href="#impact-map" 
          className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#5A189A] transition"
        >
          Explore Impact Map
        </a>
      </div>
    </div>
  );
};

export default HeroSection;