import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <>
      <div className='absolute top-[500px] w-[420px] mx-auto'>
                
      <h1 className='font-bold text-xl text-left py-4 '>Find Us On</h1>
<div className="join flex join-vertical justify-start items-left ">
           
  <button className="btn join-item  bg-transparent justify-start"> <CiFacebook />Button</button>
  <button className="btn join-item  bg-transparent text-center justify-start"> <AiFillTwitterCircle />Twiter</button>
  <button className="btn join-item  bg-transparent text-center justify-start"> <FaInstagram />Facebook</button>
</div>
      </div>
</>
    );
};

export default FindUs;