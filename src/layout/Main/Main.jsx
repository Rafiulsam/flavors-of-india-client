import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;