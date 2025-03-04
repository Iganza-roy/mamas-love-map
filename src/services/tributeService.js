// src/services/tributeService.js

// Get tributes from localStorage
const getTributes = () => {
  try {
    const saved = localStorage.getItem('momTributes');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error retrieving tributes:', error);
    return [];
  }
};

// Save tributes to localStorage
const saveTributes = (tributes) => {
  try {
    localStorage.setItem('momTributes', JSON.stringify(tributes));
    return true;
  } catch (error) {
    console.error('Error saving tributes:', error);
    return false;
  }
};

// Add a new tribute
const addTribute = (tribute) => {
  try {
    const tributes = getTributes();
    const newTribute = {
      ...tribute,
      id: Date.now(),
    };

    const updatedTributes = [...tributes, newTribute];
    saveTributes(updatedTributes);
    return newTribute;
  } catch (error) {
    console.error('Error adding tribute:', error);
    return null;
  }
};

export { getTributes, saveTributes, addTribute };
