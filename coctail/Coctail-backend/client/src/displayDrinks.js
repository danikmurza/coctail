import { get, hideLoading } from "./service.js"

const displayDrinks = async ( cocktails ) => {
  const section = get(".section-center")
  const title = get(".title")
  if (!cocktails) {
    hideLoading()
    title.textContent = "sorry, no math cocktail"
    section.innerHTML = null
    return
  }

  const newCocktails = cocktails.map((cocktail) => {
      const { idDrink, strDrink, strDrinkThumb } = cocktail
      return `<a href="./drink.html" >
   <article class="cocktail" data-id="${idDrink}" >
   <img src="${strDrinkThumb}" alt="${strDrink}" />
   <h3>${strDrink}</h3>
   </article>
   </a>` }).join("")
  hideLoading()
  title.textContent = ""
  section.innerHTML = newCocktails
  return section
}

export default displayDrinks
