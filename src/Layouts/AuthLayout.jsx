import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Login from '../components/Login/Login';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3] pt-3'>
            <Navbar></Navbar>
            <Login></Login>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;