import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage, getFromLocalStorage } from '../../utilities/localStorageUtils';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const customWidth = "mx-auto w-80 lg:w-full";

const RecipeCard = ({ recipe }) => {
    console.log(recipe);
    const { _id, recipe_name, cooking_method, ingredients, rating, img } = recipe;

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Get favorite recipes from local storage
        const favorites = getFromLocalStorage()
        setIsFavorite(favorites.includes(_id));
    }, [_id]);

    const addToFav = (_id) => {
        addToLocalStorage(_id);
        setIsFavorite(true);
        // Notify user of success
        toast.success('Recipe successfully added to favorite', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
            className: customWidth
        });
    }

    // set current icon
    const currentIcon = isFavorite ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-40">
            <div className="card-body">

                <img src={img} alt={recipe_name} className="rounded-xl h-80" />

                <h2 className="card-title text-2xl">{recipe_name}</h2>
                <hr />
                <div>
                    <strong>Ingredients:</strong>
                    {
                        ingredients.map((ingredient, i) => <span className=' ms-1 text-sm' key={i}>{ingredient},</span>)
                    }
                </div>
                <p><strong>Cooking method:</strong> {cooking_method}</p>
                <hr />
                <div className="card-actions items-center">
                    <p><strong>Ratings: </strong>{rating}</p>
                    <button className={isFavorite ? "" : "tooltip"} data-tip="Add to favorite" onClick={() => addToFav(_id)} disabled={isFavorite}>{currentIcon}</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;