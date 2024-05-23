// Add to local storage
const addToLocalStorage = id => {
    let favorites = getFromLocalStorage()
    // Check if the id is already in favorites
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites-recipes', JSON.stringify(favorites));
    }
}

const getFromLocalStorage = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('favorites-recipes')) || [];
    return storedRecipes

}

const removeFromLocalStorage = id => {
    const storedRecipes = getFromLocalStorage()
    const remaining = storedRecipes.filter(recipe => recipe !== id)
   
    if (storedRecipes.length !== remaining.length) {
        localStorage.setItem('favorites-recipes', JSON.stringify(remaining));
        return
    }
}

const clearLocalStorage = () => {
    localStorage.removeItem('favorites-recipes')
}

export {
    addToLocalStorage,
    getFromLocalStorage,
    clearLocalStorage,
    removeFromLocalStorage
}