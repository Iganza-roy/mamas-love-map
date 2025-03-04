// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className='relative py-20 bg-gradient-to-r from-pink-500 to-purple-800'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
          Celebrating Women's Month & Mother's Day
        </h1>
        <p className='text-xl text-white mb-8'>
          Honor the women who shaped your life with a poem or tribute on our
          global map
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='#poem-generator'
            className='bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded-full transition duration-300'
          >
            Generate a Poem
          </a>
          <a
            href='#impact-map'
            className='bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-6 rounded-full transition duration-300'
          >
            Explore the Map
          </a>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='text-white fill-current h-16'
        >
          <path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
