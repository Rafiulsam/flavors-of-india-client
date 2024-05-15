export const addToLocalStorage = id => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Check if the id is already in favorites
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}


