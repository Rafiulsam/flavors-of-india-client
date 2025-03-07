import banner_img from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner_img})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-4xl text-center">
                    <h1 className="mb-5 text-6xl font-bold text-white">Welcome to Flavors of India</h1>
                    <p className="mb-5 w-3/5 mx-auto text-white">Your ultimate destination for authentic Indian recipes! Embark on a culinary journey through the vibrant and diverse flavors of India's rich cuisine. From aromatic curries to tantalizing street food, discover delicious recipes that will transport your taste buds to the heart of India's culinary heritage.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;