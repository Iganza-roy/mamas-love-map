import React from 'react';

const HeroSection = () => {
  return (
    <div
      className='relative bg-cover bg-center h-screen text-white'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/womens-day.png")',
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Top Left Social Icons */}
      <div className='absolute top-5 left-5 flex space-x-4'>
        <a href='#' className='text-white hover:text-[#FFD700]'>
          <i className='fab fa-facebook'></i>
        </a>
        <a href='#' className='text-white hover:text-[#FFD700]'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#' className='text-white hover:text-[#FFD700]'>
          <i className='fab fa-pinterest'></i>
        </a>
      </div>

      {/* Date and Title */}
      <div className='absolute top-1/2 left-10 transform -translate-y-1/2'>
        <div className='text-6xl font-bold mb-4 text-[#FFD700]'>
          08<sup>th</sup> March
        </div>
        <div>
          <h2 className='text-4xl'>International</h2>
          <h1 className='text-6xl font-bold mb-6'>Women's Day</h1>
        </div>

        {/* Inspirational Message */}
        <p className='max-w-2xl text-xl mb-8 opacity-80'>
          To every woman who has been told she's too much or not enough: You are
          powerful, you are worthy, you are magnificent. Your strength knows no
          boundaries, and your potential has no limits.
        </p>

        {/* Navigation Buttons */}
        <div className='flex space-x-6'>
          <a
            href='#poem-generator'
            className='bg-[#80b183] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition text-lg'
          >
            Generate a Poem
          </a>
          <a
            href='#impact-map'
            className='border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition text-lg'
          >
            Explore Impact Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
