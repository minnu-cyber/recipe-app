document.addEventListener('DOMContentLoaded', async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const ingredients = urlParams.get('ingredients');
  const apiKey = '8f4aaed570fc48f485343ff506b76125'; // Your Spoonacular API key
  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayRecipes(data, type);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
});

function displayRecipes(recipes, type) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  
  const filteredRecipes = type === 'best'
    ? recipes.sort((a, b) => b.likes - a.likes) // Sort by likes for best recipes
    : recipes.sort((a, b) => a.likes - b.likes); // Sort by likes for worst recipes
  
  filteredRecipes.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe-item'); // Add class for styling
    recipeDiv.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <div class="recipe-details">
        <h2>${recipe.title}</h2>
        <p>Likes: ${recipe.likes}</p>
        <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
      </div>
    `;
    resultsDiv.appendChild(recipeDiv);
  });
}

function viewRecipe(recipeId) {
  window.location.href = `recipe.html?id=${recipeId}`;
}