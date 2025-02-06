import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    const currentdate = moment().format(" dddd, MMMM D, YYYY");   
    return (
        <div className=' items-center justify-center text-center py-10'>
            <img className='w-[300px] flex mx-auto py-2 flex-col gap-2' src={logo} alt="" />
            <h2 className='text-[20px] text-gray-500'>Journalism Without Fear or Favour</h2>
            <h2 className='font-bold text-gray-600 py-2'>{currentdate}</h2>
        </div>
    );
};

export default Header;