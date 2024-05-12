import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../images/recipe_banner.jpg'
import RecipeCard from '../components/RecipeCard';

const ChefRecipes = () => {
    const chefData = useLoaderData()
    console.log(chefData);
    const { chef_name, chef_photo, likes, id, number_of_recipes, recipes, years_of_experience, description } = chefData

    return (
        <div>
            {/* banner start  */}
            <div className="hero min-h-screen bg-cover" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url(${img})` }}>
                <div className="hero-content mx-6 flex-col lg:flex-row">
                    <img src={chef_photo} className="max-w-sm h-72 rounded-lg shadow-2xl" />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">{chef_name}</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold bg-amber-600 text-black p-1 rounded-lg'>Likes: {likes}</p>
                            <p className='text-xl font-semibold bg-amber-600 text-black p-1 rounded-lg'>{years_of_experience} of experience</p>
                            <p className='text-xl font-semibold bg-amber-600 text-black p-1 rounded-lg'>{number_of_recipes} Recipes available</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* banner end */}
            <h1 className='mt-10 text-5xl font-bold text-center'>Recipes</h1>
            <div className='mt-20 grid grid-cols-3 gap-5 container mx-auto'>
                {
                    Object.keys(recipes).map((recipe, i) => <RecipeCard key={i} recipe={recipes[recipe]}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipes;