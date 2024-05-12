import React from 'react';
import logo from '../images/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-t from-amber-800 to-orange-400 text-primary-content">
            <aside>
                <img className='w-52' src={logo} alt="" />
                <p className="font-bold">
                    Providing best Indian chefs recipes since 2022
                </p>
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;