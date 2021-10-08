import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";
const URL = "http://localhost:3005/api";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL)
})
