import React from 'react';
import FavBtn from './FavBtn';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const { recipe_name, cooking_method, ingredients, rating } = recipe;

    const addToFav = () => {
        toast.success('Successfully added to favorite', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>

                <div>
                    <strong>Ingredients:</strong>
                    {
                        ingredients.map((ingredient, i) => <span className=' ms-1 text-xs' key={i}>{ingredient},</span>)
                    }
                </div>
                <p><strong>Cooking method:</strong> {cooking_method}</p>
                <div className="card-actions items-center">
                    <p>{rating}</p>
                    <button className="tooltip" data-tip="Add to favorite" onClick={addToFav}><FavBtn></FavBtn></button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition:Slide />
        </div>
    );
};

export default RecipeCard;