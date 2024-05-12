import React from 'react';
import Header from '../../components/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../components/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={1}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
            />
           
        </>
    );
};

export default Main;