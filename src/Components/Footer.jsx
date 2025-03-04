import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#5A189A] text-white py-8 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='mb-4'>
          Made with ❤️ to celebrate the incredible women who shape our world
        </p>
        <div className='flex justify-center space-x-4'>
          <a href='#' className='hover:text-[#FFD700]'>
            Instagram
          </a>
          <a href='#' className='hover:text-[#FFD700]'>
            Twitter
          </a>
          <a href='#' className='hover:text-[#FFD700]'>
            Facebook
          </a>
        </div>
        <p className='mt-4 text-sm'>
          © 2024 Women's Day Tribute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
