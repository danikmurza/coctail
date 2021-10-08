import displayDrinks from "./displayDrinks.js";
import {setCocktail, fetchDrinks} from "./service.js";

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const section = await displayDrinks(data);
  if (section) {
    setCocktail(section);
  }
};

export default showDrinks;
