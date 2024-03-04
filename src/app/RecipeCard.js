// RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.Title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Meal Type: {recipe.meal_type}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default RecipeCard;
