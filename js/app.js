import { cocktailsByName, randomCocktail } from "./api.js";
import { renderCocktails } from "./dom.js";

document.getElementById("search-btn").addEventListener("click", async () => {
  const query = document.getElementById("search-input").value.trim();
  const drinks = await cocktailsByName(query);
  renderCocktails(drinks);
});

document.getElementById("random-btn").addEventListener("click", async () => {
  const drink = await randomCocktail();
  renderCocktails(drink);
});
