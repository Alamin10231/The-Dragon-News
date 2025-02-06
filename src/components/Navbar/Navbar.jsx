import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userpic from '../../assets/user.png'
import { UserProviders } from '../../Providers/AuthProviders';

const Navbar = () => {
  const {user,logout} = useContext(UserProviders)
    return (
        <div className='flex justify-between '>
          <div className="home">{user && user.email}</div>
          <div className="nav">
        <ul className='space-x-4 '>
            <NavLink to="/">Home</NavLink>
          
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </ul>
          </div>
          <div className="login flex gap-2 items-center">
          
            {
              user && user?.email? 
              
            <div className='flex items-center space-x-2'>
              <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
              <p className='text-lg font-semibold'>{user.displayName}</p>
            </div>
              : <img src={userpic} alt="" />

            }
           
            {
              user && user?.email?
              <button className='btn btn-neutral border-none py-1 px-10 rounded-none font-400 text-lg text-white' onClick={logout}>Logout</button>
              :
              <>
              <Link to='/authlayout/login'><button className='btn btn-neutral border-none py-1 px-10 rounded-none font-400 text-lg text-white'>login</button></Link>
              </>
              
            }
            
          </div>

        </div>
    );
};

export default Navbar;