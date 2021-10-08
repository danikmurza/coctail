export const get = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error("no get element")
}

export const setCocktail = (section) => {
  section.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id
    localStorage.setItem("drink", id) })
}

const loading = get(".loading")
export const showLoading = () => { loading.classList.remove("hide-loading") }
export const hideLoading = () => { loading.classList.add("hide-loading") }

export const fetchDrinks = async (url) => {
  showLoading()
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    throw new Error(error)
  }
}
