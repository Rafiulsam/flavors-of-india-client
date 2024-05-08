import React from 'react';

const ChefCard = ({ chef }) => {
    const { chef_name, chef_photo, likes, number_of_recipes, years_of_experience } = chef
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-8 pt-8 "><img className='w-full h-80 rounded-2xl' src={chef_photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Experience: {years_of_experience}</p>
                    <p>Recipes Available: {number_of_recipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;