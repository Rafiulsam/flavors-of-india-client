import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaHeart } from "react-icons/fa";
import Logo from '../images/logo.png'
import { AuthContext } from '../Providers/AuthProvider';
import default_user from '../images/default_user.png'
import { clearLocalStorage } from '../utilities/localStorageUtils';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { console.log('user sign out successfully') })
            .catch(error => console.error(error))

        clearLocalStorage()
    }
    return (
        <div className="navbar flex-row-reverse md:flex-row lg:flex-row justify-between lg:px-20 bg-gradient-to-t from-orange-400 to-amber-800">
            {/* Logo */}
            <Link to='/' className="text-white font-bold text-2xl"><img className='max-w-40 lg:max-w-52' src={Logo} alt="" />
            </Link>
            {/* nav items */}
            <div className='hidden md:flex lg:flex gap-8'>
                <NavLink to='/' className={({ isActive }) => isActive ? ' text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl  font-semibold hover:text-gray-300'}>Home
                </NavLink>
                <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl font-semibold hover:text-gray-300'}>Blog
                </NavLink>
                <NavLink to={'/favorite-recipes'} className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300 tooltip tooltip-bottom py-3'
                    : 'text-black text-xl font-semibold py-3 hover:text-gray-300  tooltip tooltip-bottom'} data-tip='Favorite recipes'><FaHeart></FaHeart>
                </NavLink>
                {/* profile */}
                {
                    user ? <><div className="flex gap-1">
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >
                                    <img alt="Profile" src={user.photoURL ? user.photoURL : default_user} />
                                </div>
                            </div>
                        </div>
                        <button className='flex items-center gap-1 hover:text-gray-300 text-black' onClick={handleLogout}><FaSignOutAlt /> <small>SignOut</small></button>
                    </div>
                    </>
                        : <div className='flex gap-1 text-black'><Link to={'/login'} className='flex items-center gap-1 hover:text-gray-300'><FaSignInAlt /> Sign In</Link> / <Link className='hover:text-gray-300' to={'/register'}>Register</Link></div>
                }
                <ThemeToggle></ThemeToggle>
            </div>
            {/*nav dropdown*/}
            <div className="sm:hidden dropdown text-black">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="bg-gradient-to-t from-orange-400 to-amber-800 menu menu-sm dropdown-content mt-3 z-[1] p-2 w-40 shadow bg-base-100 rounded-box">
                    <li> <NavLink to='/' className={({ isActive }) => isActive ? ' font-semibold rounded-lg'
                        : 'text-black font-semibold'}>Home
                    </NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => isActive ? ' font-semibold rounded-lg'
                        : 'text-black font-semibold'}>Blog
                    </NavLink></li>
                    <li><NavLink to='/favorite-recipes' className={({ isActive }) => isActive ? ' font-semibold rounded-lg'
                        : 'text-black font-semibold'}>Favorite recipes
                    </NavLink></li>
                    {
                    user ? <><div className="flex gap-1">
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : default_user} />
                                </div>
                            </div>
                        </div>
                        <button className='flex items-center gap-1 hover:text-gray-300' onClick={handleLogout}><FaSignOutAlt /> <small>SignOut</small></button>
                    </div>
                    </>
                        : <div className='flex gap-1'><Link to={'/login'} className='text-black flex items-center gap-1 hover:text-gray-300'><FaSignInAlt /> Sign In</Link> / <Link className='hover:text-gray-300' to={'/register'}>Register</Link></div>
                }
                </ul>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    );
};

export default Header;