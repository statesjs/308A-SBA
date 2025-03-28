import { cocktailById, cocktailsByName } from "./api.js";

export function renderCocktails(cocktails, preserveList = false) {
  const mainDrinkContainer = document.getElementById("main-drink");
  const otherResultsContainer = document.getElementById("other-results");

  // Clear main drink area
  mainDrinkContainer.innerHTML = "";

  if (!cocktails || cocktails.length === 0) {
    mainDrinkContainer.innerHTML = "<p>No drinks found!</p>";
    return;
  }

  const drink = cocktails[0];

  const card = document.createElement("div");
  card.className = "drink-card";

  // Card content
  card.innerHTML = `
    <div class="drink-image">
      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
    </div>
    <div class="drink-info">
      <h2 class="drink-title">${drink.strDrink}</h2>
      <p><strong>Category:</strong> ${drink.strCategory}</p>
      <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
      <h4>Ingredients:</h4>
    </div>
  `;

  const ingredientList = document.createElement("ul");
  ingredientList.classList.add("ingredient-list");

  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = `${
        measure ? measure.trim() : ""
      } ${ingredient.trim()}`.trim();
      ingredientList.appendChild(li);
    }
  }

  card.appendChild(ingredientList);
  mainDrinkContainer.appendChild(card);

  // Skip list if we're preserving it
  if (cocktails.length > 1 && !preserveList) {
    otherResultsContainer.innerHTML = "";

    const heading = document.createElement("h5");
    heading.textContent = "Other Results:";
    otherResultsContainer.appendChild(heading);

    const ul = document.createElement("ul");
    ul.className = "other-results-list";

    for (let i = 1; i < cocktails.length; i++) {
      const otherDrink = cocktails[i];
      const li = document.createElement("li");
      li.className = "result-item";
      li.textContent = otherDrink.strDrink;
      li.style.cursor = "pointer";

      li.addEventListener("click", async () => {
        const newDrink = await cocktailById(otherDrink.idDrink);
        const relatedDrinks = await cocktailsByName(newDrink[0].strDrink);

        const fullList = [
          newDrink[0],
          ...relatedDrinks.filter((d) => d.idDrink !== newDrink[0].idDrink),
        ];

        renderCocktails(fullList, false);
      });

      ul.appendChild(li);
    }

    otherResultsContainer.appendChild(ul);
  }
}
