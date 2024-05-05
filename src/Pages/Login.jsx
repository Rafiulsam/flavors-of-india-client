import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(https://st4.depositphotos.com/1003940/25295/i/450/depositphotos_252955842-stock-photo-assortment-of-various-kinds-of.jpg)" }}>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-5xl font-bold mb-7">Please Sign In !</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm bg-opacity-80 shadow-lg bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered" required />
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
            </div>
        </div>
    );
};

export default Login;