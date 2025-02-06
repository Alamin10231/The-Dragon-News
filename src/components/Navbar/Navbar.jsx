import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userpic from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between '>
          <div className="home"></div>
          <div className="nav">
        <ul className='space-x-4 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </ul>
          </div>
          <div className="login flex gap-2 items-center">
          

            <img src={userpic} alt="" />
            <Link to='/authlayout'><button className='btn btn-neutral border-none py-1 px-10 rounded-none font-400 text-lg text-white'>login</button></Link>
          </div>

        </div>
    );
};

export default Navbar;