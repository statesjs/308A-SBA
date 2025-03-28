export function renderCocktails(cocktails) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!cocktails) {
    container.innerHTML = "<p>No drinks found!</p>";
    return;
  }

  cocktails.forEach((drink) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" />
        <p><strong>Category:</strong> ${drink.strCategory}</p>
        <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
      `;
    container.appendChild(card);
  });
}
