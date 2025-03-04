import React, { useState } from 'react';
import * as htmlToImage from 'html-to-image';

const PoemGenerator = () => {
  const [momName, setMomName] = useState('');
  const [traits, setTraits] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');

  const generatePoem = async () => {
    // Placeholder for OpenAI API call
    // In a real implementation, you'd use OpenAI's API
    const prompt = `Write a heartfelt poem about a mother who is ${traits}${
      momName ? `, named ${momName}` : ''
    }`;

    // Simulated poem generation
    const mockPoem = `In the tapestry of love, you shine so bright,
A beacon of strength, a warmth day and night.
${momName ? `${momName}, ` : 'You'}, with ${traits}, 
Your love knows no bounds, no limits, no weights.

A mother's embrace, a sanctuary pure,
Your spirit, your wisdom, forever will endure.`;

    setGeneratedPoem(mockPoem);
  };

  const downloadPoem = () => {
    const poemElement = document.getElementById('poem-card');
    htmlToImage.toPng(poemElement).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'mothers-day-poem.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div id='poem-generator' className='bg-[#FFC0CB] py-16 px-6'>
      <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold text-[#5A189A] mb-6 text-center'>
          Generate a Poem for Mom
        </h2>

        <div className='space-y-4'>
          <input
            type='text'
            placeholder="Mom's Name (Optional)"
            value={momName}
            onChange={(e) => setMomName(e.target.value)}
            className='w-full p-3 border rounded-lg'
          />
          <input
            type='text'
            placeholder='Describe your mom (e.g., caring, strong, loving)'
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
            className='w-full p-3 border rounded-lg'
          />
          <button
            onClick={generatePoem}
            className='w-full bg-[#FF69B4] text-white py-3 rounded-full hover:bg-opacity-90 transition'
          >
            Generate Poem
          </button>
        </div>

        {generatedPoem && (
          <div className='mt-8'>
            <div
              id='poem-card'
              className='bg-gradient-to-br from-[#FFD700] to-[#FF69B4] p-6 rounded-lg text-white'
            >
              <pre className='whitespace-pre-wrap font-serif text-center'>
                {generatedPoem}
              </pre>
            </div>
            <div className='flex space-x-4 mt-4'>
              <button
                onClick={downloadPoem}
                className='flex-1 bg-[#5A189A] text-white py-3 rounded-full hover:bg-opacity-90 transition'
              >
                Download Poem
              </button>
              {/* Social share buttons can be added here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoemGenerator;
