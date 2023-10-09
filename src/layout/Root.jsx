import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className=''>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
                <Toaster position="top-center" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;