const generatePoemWithOpenAI = async (momName, traits) => {
  try {
    // This would typically be a fetch call to your backend service
    // For mock purposes, we'll simulate a response

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real implementation, you would call the OpenAI API through your server
    // const response = await fetch('/api/generate-poem', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name: momName, traits })
    // });
    // const data = await response.json();
    // return data.poem;

    // For now, we'll use templates similar to our mock function
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
    return randomTemplate;
  } catch (error) {
    console.error('Error generating poem:', error);
    throw new Error('Failed to generate poem');
  }
};

export { generatePoemWithOpenAI };
