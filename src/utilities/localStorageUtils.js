// Add to local storage
const addToLocalStorage = id => {
    let favorites = getFromLocalStorage()
    // Check if the id is already in favorites
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites-recipes', JSON.stringify(favorites));
    }
}

const getFromLocalStorage =()=>{
    const storedRecipes =  JSON.parse(localStorage.getItem('favorites-recipes')) || [];
    return storedRecipes

}


const removeFromLocalStorage = () => {
    localStorage.removeItem('favorites-recipes')
}

export {
    addToLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage
}