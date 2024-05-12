import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import img from '../images/login.jpg'
import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // Authentication context
    const { signInWithEmail, createUserWithGoogle, createUserWithGitHub } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location);
   
    const from = location.state?.from?.pathname || '/'

    // Login event handler
    const handleLogin = event => {
        // Prevent default form submission
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // user sign in
        signInWithEmail(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate(from)
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "light",
                    transition: Slide
                })
            })
    }

    // Google sign in event handler
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Github sign in event handler
    const handleGithubLogin = () => {
        createUserWithGitHub()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate(from)
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(${img})` }}>
            <div className="hero-content flex-col mt-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-5xl font-bold mb-7">Please Sign In !</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm bg-opacity-80 shadow-lg bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Sign In</button>
                        </div>
                        <p className='label'><small>Don't have an account? <Link className='underline text-blue-500' to={'/register'}>Register</Link></small></p>
                    </form>
                </div>
                <div>
                    <p className="text-white mt-7 mb-3">Or Sign Up Using</p>
                    <div className='flex justify-evenly text-white text-2xl mb-10'>
                        <button onClick={handleGoogleLogin}> <FaGoogle></FaGoogle></button>
                        <button onClick={handleGithubLogin}><FaGithub></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;