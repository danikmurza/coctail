import {fetchDrinks} from "./src/service.js";
import displayDrink from "./src/displaySingleDrink.js";
const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(
      `http://localhost:3005/api/${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
