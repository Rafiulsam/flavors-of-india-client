import React from 'react';
import banner_img from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner_img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Flavors of India</h1>
                    <p className="mb-5">Your ultimate destination for authentic Indian recipes! Embark on a culinary journey through the vibrant and diverse flavors of India's rich cuisine. From aromatic curries to tantalizing street food, discover delicious recipes that will transport your taste buds to the heart of India's culinary heritage.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;