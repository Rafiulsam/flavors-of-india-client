import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FavRecipe from '../components/FavRecipe';
import { removeFromLocalStorage } from '../utilities/localStorageUtils';
import { toast } from 'react-toastify';

const FavoriteRecipes = () => {
    const recipesData = useLoaderData()
    const [favorites, setFavorites] = useState(recipesData)

    const handleRemoveFavorite = id => {
        const remaining = favorites.filter(recipe => recipe._id !== id)
        setFavorites(remaining)
        removeFromLocalStorage(id)
        toast.success('Recipe successfully removed from favorite', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        })
    }
    return (
        <div className='container mx-auto mb-80'>
            <h1 className='text-3xl my-20'>Favorite recipes</h1>

            {
                favorites.length != 0 ? favorites.map((recipe, i) => <FavRecipe key={i} recipe={recipe} handleRemoveFavorite={handleRemoveFavorite}></FavRecipe>) :
                    <div className='flex flex-col items-center gap-10 h-64'>
                        <h1 className='text-2xl text-center'>You don't have any favorite recipe</h1>
                        <Link className='btn btn-neutral w-1/4 mx-auto text-xl' to={'/'}>Browse recipe</Link>
                    </div>
            }
        </div>
    );
};

export default FavoriteRecipes;