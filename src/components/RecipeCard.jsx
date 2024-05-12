import React from 'react';
import FavBtn from './FavBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toastify prevent duplicate
const customId = "custom-id-yes";
const customWidth = "mx-auto w-80 lg:w-full";

const RecipeCard = ({ recipe }) => {
    const { recipe_name, cooking_method, ingredients, rating } = recipe;

    const addToFav = () => {
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
                    <button className="tooltip " data-tip="Add to favorite" onClick={addToFav}><FavBtn></FavBtn></button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default RecipeCard;