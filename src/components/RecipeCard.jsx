import React, { useEffect, useState } from 'react';
import FavBtn from './FavBtn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage } from '../utilities/localStorageUtils';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Toastify prevent duplicate
const customId = "custom-id-yes";
const customWidth = "mx-auto w-80 lg:w-full";

const RecipeCard = ({ recipe }) => {
    const { _id, recipe_name, cooking_method, ingredients, rating } = recipe;
    // State to track if recipe is already a favorite
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Check if the recipe is already a favorite when component mounts
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(_id));
    }, [_id]);

    const addToFav = (_id) => {
        addToLocalStorage(_id);
        setIsFavorite(true);
        // Notify user of success
        toast.success('Successfully added to favorite', {
            toastId: customId,
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
    const currentIcon = isFavorite? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-40">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
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
                    <button className={isFavorite? "":"tooltip"} data-tip="Add to favorite" onClick={()=> addToFav(_id)} disabled={isFavorite}>{currentIcon}</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;