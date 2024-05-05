import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const Header = () => {
    const user = true
    return (
        <div className="navbar justify-between px-20 bg-gradient-to-t from-orange-400 to-amber-800">
            <Link to='/' className="text-white font-bold text-2xl">Flavors of India</Link>
            <div className='gap-8'>
                <NavLink to='/' className={({ isActive }) => isActive ? ' text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl  font-semibold hover:text-gray-300'}>Home
                </NavLink>
                <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl font-semibold hover:text-gray-300'}>Blog
                </NavLink>
                {
                    user ? <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <Link className='flex items-center gap-1'><FaSignOutAlt /> <small>SignOut</small>
                        </Link>
                    </>
                        : <Link to={'/login'} className='text-black flex items-center gap-1'><FaSignInAlt /> Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;