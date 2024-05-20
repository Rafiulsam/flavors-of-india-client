import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_photo, likes, number_of_recipes, years_of_experience } = chef
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-8 pt-8 "><img className='w-full h-60 rounded-2xl' src={chef_photo} alt={chef_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Recipes Available: {number_of_recipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions">
                    <Link to={`/recipes/${id}`}><button className="btn btn-neutral">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;