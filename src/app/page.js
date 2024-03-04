"use client";
import { useEffect, useState } from "react";
import db from "./firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import RecipeList from "./RecipeList";
import RecipeSearch from "./RecipeSearch";
import AddRecipeForm from "./AddRecipeForm";

async function fetchRecipesFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db.db, "recipes"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
}

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await fetchRecipesFromFirestore();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  const handleSearch = (searchTerm) => {
    // Implement search logic here
    console.log("Search term:", searchTerm);
  };

  const handleAddRecipe = (recipeData) => {
    // Implement add recipe logic here
    console.log("Recipe data:", recipeData);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <RecipeSearch onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
      <AddRecipeForm onAdd={handleAddRecipe} />
    </div>
  );
}
