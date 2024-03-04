// AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = ({ onAdd }) => {
  const [recipeData, setRecipeData] = useState({
    Title: '',
    category: '',
    meal_type: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(recipeData);
    setRecipeData({
      Title: '',
      category: '',
      meal_type: '',
      // Reset other fields as needed
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Title" value={recipeData.Title} onChange={handleChange} placeholder="Title" />
      {/* Add more input fields for other recipe details */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
