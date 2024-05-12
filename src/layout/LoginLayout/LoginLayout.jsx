import React from 'react';
import Header from '../../components/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default LoginLayout;