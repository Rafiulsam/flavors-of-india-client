import React from 'react';
import Header from '../../components/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                transition:Slide />
        </div>
    );
};

export default LoginLayout;