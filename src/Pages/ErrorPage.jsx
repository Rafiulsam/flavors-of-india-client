import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {status, error} = useRouteError()
    const navigate =useNavigate()
    console.error(error)
    return (
        <div className='flex flex-col gap-10 justify-center items-center h-screen'>
            <h1 className='text-5xl font-semibold'>Oops! Page not found</h1>
            <p className='text-6xl font-semibold text-red-500'><i>{status}</i></p>
            <p><i>Sorry, the page you're looking for doesn't exist or has been deleted .</i></p>
            <button className='btn btn-neutral' onClick={()=>navigate(-1)}> <FaArrowLeft></FaArrowLeft> Go Back</button>
        </div>
    );
};

export default ErrorPage;