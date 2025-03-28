export async function cocktailsByName(name) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
}

export async function randomCocktail() {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();
  return data.drinks;
}
