import React, { useEffect, useState } from 'react';
import SpiceCard from '../cards/SpiceCard';

const SpiceSection = () => {
    const [spices, setSpices] = useState([])

    useEffect(() => {
        fetch('https://flavors-of-india-server-rafiul-sams-projects.vercel.app/spices')
            .then(res => res.json())
            .then(data => setSpices(data))
    }, [])
    return (
        <div className='container mx-auto mb-28'>
            <h1 className='text-center text-5xl font-bold'>Top 10 Indian spices</h1>
            <p className='text-center lg:w-2/4 mx-auto mt-5 mb-10'>There are more than 40 Indian spices. Many are obscure and used only in certain regions, like stone flower and garcinia. Here is a list of 10 essential spices that are used in just about all Indian food, encompassing several centuries-old culinary traditions from all over the broad subcontinent.</p>

            <div>
                {
                    spices.map((spices, i) =><SpiceCard key={i} spices={spices}></SpiceCard>)
                }
            </div>

        </div>
    );
};

export default SpiceSection;