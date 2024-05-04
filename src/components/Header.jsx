import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar container mx-auto justify-between">
            <button className="font-bold text-2xl">Flavors of India</button>
            <div className='gap-8'>
                <NavLink to='/' className={({ isActive }) => isActive ? ' font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-500'
                    : 'text-xl  font-semibold hover:text-gray-500'}>Home
                </NavLink>
                <NavLink to='blog' className={({ isActive }) => isActive ? ' font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-500'
                    : 'text-xl font-semibold hover:text-gray-500'}>Blog
                </NavLink>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <Link className='flex items-center gap-1'><FaSignOutAlt /> <small>SignOut</small></Link>

            </div>
        </div>
    );
};

export default Header;