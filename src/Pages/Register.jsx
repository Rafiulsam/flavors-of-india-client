import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import img from '../images/register.jpg'
import { Slide, ToastContainer, toast } from 'react-toastify';

const Register = () => {
    // Authentication context
    const { createUserWithGoogle, createUserWithEmail } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const [passValue, setPassValue] = useState('')
    const navigate = useNavigate()

    // Register event handler
    const handleRegister = event => {
        // Prevent default form submission
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // Validate password strength
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("Password must contain at least one uppercase letter", {
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
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            toast.error('Password must contain at least a spacial character (!@#$&*)', {
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
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            toast.error('Password must contain at least one number', {
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
            return
        }
        else if (password.length < 6) {
            toast.error('Password must be 6 characters long', {
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
            return
        }

        // create user with email
        createUserWithEmail(email, password)
            .then(result => {
                const createdUser = result.user
                updateUserProfile(createdUser, name, photo)
                navigate('/')
                form.reset()
                toast.success('Account has been successfully created', {
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
            .catch(error => {
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
            })
            .catch(error => {
                console.error(error);
            })
    }

    // User profile update event handler
    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }

    const handlePassShow = () => {
        setShowPass(!showPass)
    }

    const handlePasswordChange = event => {
        setPassValue(event.target.value);
    }

    return (
        <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%), url(${img})` }}>
            <div className="hero-content flex-col mt-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-3xl lg:text-5xl font-bold mb-7">Please Register !</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm bg-opacity-80 shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your photo URL" className="input input-bordered" />
                        </div>
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
                            <input type={showPass ? 'text' : 'password'} value={passValue} onChange={handlePasswordChange} name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <div className='relative'>

                                {
                                    passValue.length > 0 && (<div className='absolute bottom-4 right-3' onClick={handlePassShow} role='button'>
                                        {showPass ? <FaRegEye></FaRegEye> :
                                            <FaRegEyeSlash></FaRegEyeSlash>}
                                    </div>)
                                }

                            </div>
                        </div>
                        <div className="form-control">
                            <label className="justify-start gap-1 label cursor-pointer">
                                <input type="checkbox" className="checkbox checkbox-xs" required />
                                <span className="label-text">Accept <Link className='underline text-blue-500' >terms and conditions</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Submit</button>
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
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide} />
        </div>
    );
};

export default Register;