// src/components/PoemGenerator.jsx
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const PoemGenerator = () => {
  // State for poem generator
  const [momName, setMomName] = useState('');
  const [traits, setTraits] = useState('');
  const [generatedPoem, setGeneratedPoem] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const poemCardRef = useRef(null);

  const generatePoem = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const templates = [
        `Dear ${momName || 'Mom'},\n\nIn your ${
          traits.split(',')[0] || 'loving'
        } embrace,\nI found my strength, my safe place.\n${
          traits.split(',')[1] || 'Gentle'
        } hands that guided me through,\nA heart so ${
          traits.split(',')[2] || 'kind'
        }, forever true.\n\nThank you for everything you do.`,

        `To my ${traits.split(',')[0] || 'wonderful'} ${
          momName || 'Mom'
        },\n\nLike a lighthouse in the storm,\nYour ${
          traits.split(',')[1] || 'caring'
        } spirit keeps me warm.\nWith wisdom and grace, you light my way,\nYour ${
          traits.split(',')[2] || 'love'
        } guides me every day.\n\nWith all my love and gratitude.`,

        `${momName || 'Mom'}, you are ${
          traits.split(',')[0] || 'amazing'
        },\n\nYour ${
          traits.split(',')[1] || 'strength'
        } is a mountain,\nYour love, an endless fountain.\nIn your eyes, I see the sky,\nIn your ${
          traits.split(',')[2] || 'warmth'
        }, I learn to fly.\n\nForever grateful for you.`,
      ];

      const randomTemplate =
        templates[Math.floor(Math.random() * templates.length)];

      setGeneratedPoem(randomTemplate);
      setIsGenerating(false);
    }, 1500);
  };

  const downloadPoemAsImage = () => {
    if (!poemCardRef.current) return;
    alert(
      'In a production environment, this would save the poem as an image using html2canvas or dom-to-image.'
    );
  };

  return (
    <section id='poem-generator' className='py-16 px-4 bg-white'>
      <div className='container mx-auto max-w-4xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12'>
          Create a Heartfelt Poem for Mom
        </h2>

        <div className='bg-gray-50 p-8 rounded-lg shadow-lg'>
          <div className='mb-8'>
            <div className='mb-4'>
              <label
                htmlFor='mom-name'
                className='block text-gray-700 font-medium mb-2'
              >
                Mom's Name (Optional)
              </label>
              <input
                type='text'
                id='mom-name'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
                placeholder='Enter her name'
                value={momName}
                onChange={(e) => setMomName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='traits'
                className='block text-gray-700 font-medium mb-2'
              >
                Words that describe her
              </label>
              <input
                type='text'
                id='traits'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'
                placeholder='loving, strong, wise (comma separated)'
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
              />
            </div>

            <button
              className='w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-md transition duration-300'
              onClick={generatePoem}
              disabled={isGenerating}
            >
              {isGenerating ? 'Creating your poem...' : 'Generate Poem'}
            </button>
          </div>

          {generatedPoem && (
            <div
              ref={poemCardRef}
              className='bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-pink-300 shadow-md'
            >
              <h3 className='text-xl font-bold text-center text-purple-800 mb-4'>
                Your Special Poem
              </h3>
              <div className='whitespace-pre-line text-gray-800 text-center font-serif'>
                {generatedPoem}
              </div>
              <div className='mt-6 text-center'>
                <button
                  className='bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-4 rounded-md mr-2'
                  onClick={downloadPoemAsImage}
                >
                  Save as Image
                </button>
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md'
                  onClick={() =>
                    alert(
                      'In a production environment, this would share to social media.'
                    )
                  }
                >
                  Share
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PoemGenerator;
