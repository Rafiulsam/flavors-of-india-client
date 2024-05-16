import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FavoriteRecipes = () => {
    const chefsData = useLoaderData()
    console.log(chefsData);

    return (
        <div>
           
        </div>
    );
};

export default FavoriteRecipes;