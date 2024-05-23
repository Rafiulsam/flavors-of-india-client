import React from 'react';

const SpiceCard = ({ spices }) => {
    const { name, description, usage, img } = spices
    return (
        <div className="hero mb-16 lg:w-3/4 mx-auto bg-base-200 rounded-lg">
            <div className="hero-content lg:h-96 flex-col lg:flex-row">
                <img src={img} className=" lg:max-w-sm rounded-lg
                h-80 shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold mb-3">{name}</h1>
                    <p >{description}</p>
                    <p className="mt-4">{usage}</p>

                </div>
            </div>
        </div>
    );
};

export default SpiceCard;