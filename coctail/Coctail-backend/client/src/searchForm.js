import { get } from "./service.js";
import presentDrinks from "./presentDrinks.js";
const baseURL = "http://localhost:3005/api";
const form = get(".search-form");
const input = get('[name="drink"]');
form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
