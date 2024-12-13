import recipes from './Tech.mjs';


function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Get a random Computer from the list
function getRandomRecipe(recipes) {
  const index = getRandomNumber(recipes.length);
  return recipes[index];
}

// Render the recipes to the page
function renderRecipes(recipeList) {
  const recipeContainer = document.querySelector('main');
  const recipesHTML = recipeList.map(recipeTemplate).join('');
  recipeContainer.innerHTML = recipesHTML;
}

// Search handler for the search bar
function searchHandler(event) {
    event.preventDefault();
  
    // Get the search query from the input
    const query = document.querySelector('#search-form input').value.toLowerCase();
  
    // Filter the recipes based on the query
    const filteredRecipes = filterRecipes(query);
  
    // Update the header text
    const itemsHeader = document.getElementById('Items');
  
    if (query && filteredRecipes.length > 0) {
      itemsHeader.textContent = "Search Results"; // Update to "Search Results"
    } else if (query && filteredRecipes.length === 0) {
      itemsHeader.textContent = "No Results Found"; // If nothing is found
    } else {
      itemsHeader.textContent = "Featured Item"; // Default back to "Featured Item"
    }
  
    // Render the filtered recipes
    renderRecipes(filteredRecipes);
  }
  

// Filter recipes based on the query
function filterRecipes(query) {
    return recipes
      .filter(recipe => {
        const matchesName = recipe.name.toLowerCase().includes(query);
        const matchesDescription = recipe.description.toLowerCase().includes(query);
        const matchesTags = recipe.tags?.find(tag => tag.toLowerCase().includes(query)); // Safe check
        const matchesIngredients = recipe.ingredients?.find(ingredient => ingredient.toLowerCase().includes(query)); // Safe check
  
        return matchesName || matchesDescription || matchesTags || matchesIngredients;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  

// Generate tags HTML
function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Generate ratings HTML
function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}

// Generate recipe HTML
function recipeTemplate(recipe) {
    return `<figure class="recipe-card">
      <img class="recipe-image" src="${recipe.image}" alt="Image of ${recipe.name}" />
      <figcaption class="recipe-details">
        <span class="recipe-tag">${recipe.tags[0]}</span>
        <h2 class="recipe-title">${recipe.name}</h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe-description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>`;
  }
  

// Load random Device on load
function init() {
  const recipe = getRandomRecipe(recipes);
  renderRecipes([recipe]);
}

// Search listener
document.querySelector('#search-form').addEventListener('submit', searchHandler);


init();
