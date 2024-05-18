import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const FavRecipe = ({ recipe, handleRemoveFavorite }) => {
    const { recipe_name, chef_name, _id } = recipe
    return (
        <div className="card max-w-xl mx-auto bg-base-100 shadow-xl shadow-amber-400 mb-20">
            <div className="p-8 flex justify-between">
                <div>
                    <h2 className=''>Chef: {chef_name}</h2>
                    <h2 className="card-title">Recipe: {recipe_name}</h2>
                </div>

                <button onClick={()=> handleRemoveFavorite(_id)} className='text-3xl text-amber-500'><FaTrashAlt></FaTrashAlt> </button>

            </div>
        </div>
    );
};

export default FavRecipe;