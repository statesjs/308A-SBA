export { cocktailsByName, randomCocktail, cocktailById, cocktailByTequila };

async function cocktailsByName(name) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const data = await response.json();
  return data.drinks;
}

async function randomCocktail() {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();
  return data.drinks;
}

async function cocktailById(id) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.drinks;
}
//Cocktails by popular spirits gin, vodka, tequila, etc
//tequila
async function cocktailByTequila() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=tequila"
  );
  const data = await response.json();
  return data;
}

async function cocktailByGin() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin"
  );
  const data = await response.json();
  return data;
}

async function cocktailByVodka() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
  );
  const data = await response.json();
  return data;
}
