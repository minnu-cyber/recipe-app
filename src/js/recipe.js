document.addEventListener('DOMContentLoaded', async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');
  const apiKey = '8f4aaed570fc48f485343ff506b76125'; // Your Spoonacular API key
  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayRecipeDetails(data);
  } catch (error) {
    console.error('Error fetching recipe details:', error);
  }
});

function displayRecipeDetails(recipe) {
  const recipeDetailsDiv = document.getElementById('recipe-details');
  recipeDetailsDiv.innerHTML = `
    <h2>${recipe.title}</h2>
    <img src="${recipe.image}" alt="${recipe.title}">
    <p>${recipe.instructions}</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
    </ul>
  `;
}