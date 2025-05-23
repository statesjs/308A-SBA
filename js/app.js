import {
  cocktailsByName,
  randomCocktail,
  cocktailById,
  cocktailByGin,
  cocktailByVodka,
  cocktailByTequila,
} from "./api.js";

import { renderCocktails } from "./dom.js";

document.getElementById("search-btn").addEventListener("click", async () => {
  const input = document.getElementById("search-input").value.trim();
  if (!input) {
    alert("Please enter a cocktail name!");
    return;
  }

  const drinks = await cocktailsByName(input);
  renderCocktails(drinks); // will show main + related if available
});

document.getElementById("random-btn").addEventListener("click", async () => {
  const randomDrinkArr = await randomCocktail();
  const mainDrink = randomDrinkArr[0];

  renderCocktails([mainDrink], true);

  const otherResults = document.getElementById("other-results");
  if (otherResults) otherResults.innerHTML = "";
});

document
  .getElementById("spirit-select")
  .addEventListener("change", async (e) => {
    const spirit = e.target.value;

    if (!spirit) return;

    let drinks;

    if (spirit === "vodka") {
      drinks = await cocktailByVodka();
    } else if (spirit === "gin") {
      drinks = await cocktailByGin();
    } else if (spirit === "tequila") {
      drinks = await cocktailByTequila();
    }

    renderCocktails(drinks);
  });
