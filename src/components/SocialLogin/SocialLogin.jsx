import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className=' flex flex-col  w-full'>
           <p className='btn my-2 bg-transparent border-1 border-blue-600 text-blue-600 '><FaGoogle />Login with Google</p>
           <p className='btn my-2 bg-transparent border-1  border-black'><FaGithub /> Login with Github</p>
        </div>
    );
};

export default SocialLogin;