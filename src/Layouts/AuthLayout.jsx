import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3] pt-3'>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;