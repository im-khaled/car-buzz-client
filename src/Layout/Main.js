import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;