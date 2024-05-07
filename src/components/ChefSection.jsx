import React, { useEffect, useState } from 'react';

const ChefSection = () => {
    const [chefs, setChefs]= useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <h1>ChefSection</h1>
            <div>
                {
                    chefs.map(chef => console.log(chef))
                }
            </div>
        </div>
    );
};

export default ChefSection;