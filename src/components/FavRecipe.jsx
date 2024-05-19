import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

const FavRecipe = ({ recipe, handleRemoveFavorite }) => {
    const { recipe_name, chef_name, _id } = recipe
    return (
        <div className="card lg:max-w-xl mx-auto bg-base-100 shadow-lg shadow-orange-400 mb-20">
            <div className="p-8 flex justify-between">
                <div>
                    <h2 >Chef: {chef_name}</h2>
                    <h2 className="card-title">{recipe_name}</h2>
                </div>

                <button onClick={()=> handleRemoveFavorite(_id)} className='text-3xl text-orange-500'><FaTimesCircle></FaTimesCircle> </button>

            </div>
        </div>
    );
};

export default FavRecipe;