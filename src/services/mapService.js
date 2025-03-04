// Store and retrieve tributes from localStorage
export const getTributes = () => {
  const saved = localStorage.getItem('momTributes');
  return saved ? JSON.parse(saved) : [];
};

export const saveTribute = (tributes) => {
  localStorage.setItem('momTributes', JSON.stringify(tributes));
};

// Add a new tribute
export const addTribute = (newTribute) => {
  if (!newTribute.lat || !newTribute.message) {
    return false;
  }

  const tributes = getTributes();
  const tributeWithId = {
    ...newTribute,
    id: Date.now(),
  };

  const updatedTributes = [...tributes, tributeWithId];
  saveTribute(updatedTributes);
  return updatedTributes;
};

// For future implementation with a backend service:
/*
  export const fetchTributes = async () => {
    try {
      const response = await fetch('/api/tributes');
      if (!response.ok) {
        throw new Error('Failed to fetch tributes');
      }
      const data = await response.json();
      return data.tributes;
    } catch (error) {
      console.error('Error fetching tributes:', error);
      return getTributes(); // Fall back to local storage
    }
  };
  
  export const postTribute = async (tribute) => {
    try {
      const response = await fetch('/api/tributes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tribute),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save tribute');
      }
      
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error posting tribute:', error);
      // Fall back to local storage
      addTribute(tribute);
      return true;
    }
  };
  */
