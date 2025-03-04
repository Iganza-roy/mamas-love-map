// src/services/poemService.js

// Mock implementation - replace with actual API call in production
export const generatePoem = async (name, traits) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Sample templates with placeholders
  const templates = [
    `Dear ${name || 'Mom'},\n\nIn your ${
      traits.split(',')[0] || 'loving'
    } embrace,\nI found my strength, my safe place.\n${
      traits.split(',')[1] || 'Gentle'
    } hands that guided me through,\nA heart so ${
      traits.split(',')[2] || 'kind'
    }, forever true.\n\nThank you for everything you do.`,

    `To my ${traits.split(',')[0] || 'wonderful'} ${
      name || 'Mom'
    },\n\nLike a lighthouse in the storm,\nYour ${
      traits.split(',')[1] || 'caring'
    } spirit keeps me warm.\nWith wisdom and grace, you light my way,\nYour ${
      traits.split(',')[2] || 'love'
    } guides me every day.\n\nWith all my love and gratitude.`,

    `${name || 'Mom'}, you are ${traits.split(',')[0] || 'amazing'},\n\nYour ${
      traits.split(',')[1] || 'strength'
    } is a mountain,\nYour love, an endless fountain.\nIn your eyes, I see the sky,\nIn your ${
      traits.split(',')[2] || 'warmth'
    }, I learn to fly.\n\nForever grateful for you.`,
  ];

  // Select a random template
  const randomTemplate =
    templates[Math.floor(Math.random() * templates.length)];
  return randomTemplate;

  // For production with OpenAI API:
  /*
    try {
      const response = await fetch('/api/generate-poem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          traits
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate poem');
      }
      
      const data = await response.json();
      return data.poem;
    } catch (error) {
      console.error('Error:', error);
      // Fall back to template method
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      return randomTemplate;
    }
    */
};
