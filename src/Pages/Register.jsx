import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const { createUserWithGoogle } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        createUserWithGoogle()
        .then(result=>{
            const createdUser = result.user
            console.log(createdUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(https://static.vecteezy.com/system/resources/previews/030/643/234/non_2x/of-indian-food-with-no-background-free-photo.jpg)" }}>
            <div className="hero-content flex-col mt-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-5xl font-bold mb-7">Please Register !</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm bg-opacity-80 shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="justify-start gap-1 label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-xs" required />
                                <span className="label-text">Accept <Link className='underline text-blue-500' >terms and conditions</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Sign In</button>
                        </div>
                        <p className='label'><small>Already have an account? <Link className='underline text-blue-500' to={'/login'}>Sign in</Link></small></p>
                    </form>
                </div>
                <div>
                    <p className="text-white mt-7 mb-3">Or Sign Up Using</p>
                    <div className='flex justify-evenly text-white text-2xl mb-10'>
                        <button onClick={handleGoogleLogin}> <FaGoogle></FaGoogle></button>
                        <button>
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;