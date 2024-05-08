import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefSection = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <>
            <h1 className='text-center text-5xl font-bold mt-28'>Our Chefs</h1>
            <p className='text-center w-2/4 mx-auto mt-5'>Discover the culinary geniuses behind the magic at Flavors of India. Our team of expert chefs brings years of experience and a passion for authentic Indian cuisine to the table. Get to know each chef and their unique culinary style as they share their expertise and favorite recipes.</p>
            <div className='container mx-auto grid grid-cols-3 gap-5 mt-10'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>

        </>
    );
};

export default ChefSection;