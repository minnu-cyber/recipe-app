function handleChoice() {
    const bestRecipeButton = document.getElementById('best-recipe');
    const worstRecipeButton = document.getElementById('worst-recipe');

    bestRecipeButton.addEventListener('click', () => {
        choose('best');
    });

    worstRecipeButton.addEventListener('click', () => {
        choose('worst');
    });
}

function choose(type) {
  window.location.href = 'ingredient.html?type=' + type;
}

document.addEventListener('DOMContentLoaded', handleChoice);