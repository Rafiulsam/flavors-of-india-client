import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <h1>LoginLayout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;