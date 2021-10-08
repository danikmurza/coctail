import { get, hideLoading } from "./service.js"
const displayDrink = ( data ) => {
  hideLoading()
  const drink = data.drinks[0][0]
  const { strDrinkThumb, strDrink, strInstructions } = drink
  const list = [ drink.strIngredient1, drink.strIngredient2,
    drink.strIngredient3, drink.strIngredient4, drink.strIngredient5 ]

  const img = get(".drink-img")
  const drinkName = get(".drink-name")
  const description = get(".drink-desc")
  const ingredients = get(".drink-ingredients")
  img.src = strDrinkThumb
  document.title = strDrink
  drinkName.textContent = strDrink
  description.textContent = strInstructions
  ingredients.innerHTML = list.map((item) => {
      if (!item) return
      return `<li><i class="far fa-check-square"></i>${item}</li>` }).join("")
  console.log(drink)
}

export default displayDrink
