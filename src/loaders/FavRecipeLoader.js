import { getFromLocalStorage } from "../utilities/localStorageUtils"

const favRecipeLoader = async () => {
    const chefsData = await fetch('https://flavors-of-india-server-rafiul-sams-projects.vercel.app/chefs')
    const chefs = await chefsData.json()
    
    // Flatten the recipes array and add chef_name to each recipe
    const allRecipes = chefs.flatMap(chef =>
        chef.recipes.map(recipe => ({ ...recipe, chef_name: chef.chef_name }))
    )
    // Get saved recipes from local storage
    const storedRecipes = getFromLocalStorage()
    const favoriteRecipes = []
    for (const id of storedRecipes) {
        const recipe = allRecipes.find(recipe => recipe._id === id)
        if (recipe) {
            favoriteRecipes.push(recipe)
        }
    }
    return favoriteRecipes

}

export default favRecipeLoader