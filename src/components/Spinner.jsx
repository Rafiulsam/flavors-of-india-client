import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-spinner loading-lg text-warning" ></span>
        </div>
    );
};

export default Spinner;