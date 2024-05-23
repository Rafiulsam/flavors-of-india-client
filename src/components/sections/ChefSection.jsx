import React, { useEffect, useState } from 'react';
import ChefCard from '../cards/ChefCard';

const ChefSection = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://flavors-of-india-server-rafiul-sams-projects.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <>
            <h1 className='text-center text-5xl font-bold mt-28'>Our Chefs</h1>
            <p className='text-center lg:w-2/4 mx-auto mt-5'>Discover the culinary geniuses behind the magic at Flavors of India. Our team of expert chefs brings years of experience and a passion for authentic Indian cuisine to the table. Get to know each chef and their unique culinary style as they share their expertise and favorite recipes.</p>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 mb-40'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>

        </>
    );
};

export default ChefSection;