import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaHeart } from "react-icons/fa";
import Logo from '../images/logo.png'
import { AuthContext } from '../Providers/AuthProvider';
import default_user from '../images/default_user.png'
import { removeFromLocalStorage } from '../utilities/localStorageUtils';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { console.log('user sign out successfully') })
            .catch(error => console.error(error))

        removeFromLocalStorage()
    }
    return (
        <div className="navbar justify-between px-20 bg-gradient-to-t from-orange-400 to-amber-800">
            <Link to='/' className="text-white font-bold text-2xl"><img className='w-52' src={Logo} alt="" /></Link>
            <div className='gap-8'>
                <NavLink to='/' className={({ isActive }) => isActive ? ' text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl  font-semibold hover:text-gray-300'}>Home
                </NavLink>
                <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300'
                    : 'text-black text-xl font-semibold hover:text-gray-300'}>Blog
                </NavLink>
                <NavLink to={'/favorite-recipes'} className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-8 rounded-lg text-xl hover:text-gray-300 tooltip tooltip-bottom py-3'
                    : 'text-black text-xl font-semibold py-3 hover:text-gray-300  tooltip tooltip-bottom'} data-tip='My favorite recipes'><FaHeart></FaHeart>
                </NavLink>
                {
                    user ? <><div className="flex gap-1">
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : default_user} />
                                </div>
                            </div>
                        </div>
                        <button className='flex items-center gap-1' onClick={handleLogout}><FaSignOutAlt /> <small>SignOut</small></button>
                    </div>
                    </>
                        : <div className='flex gap-1'><Link to={'/login'} className='text-black flex items-center gap-1 hover:text-gray-300'><FaSignInAlt /> Sign In</Link> / <Link className='hover:text-gray-300' to={'/register'}>Register</Link></div>
                }

            </div>
        </div>
    );
};

export default Header;