export function setupIngredientForm() {
    const form = document.getElementById('ingredient-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const ingredientType = document.querySelector('input[name="recipe-type"]:checked').value;
        const ingredients = document.getElementById('ingredients').value;

        // Redirect to results page with parameters
        window.location.href = `results.html?type=${ingredientType}&ingredients=${encodeURIComponent(ingredients)}`;
    });
}

export function handleFormSubmit(event) {
  event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const ingredients = document.getElementById('ingredients').value;
  window.location.href = `results.html?type=${type}&ingredients=${ingredients}`;
}

document.getElementById('ingredients-form').addEventListener('submit', handleFormSubmit);