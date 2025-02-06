import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';

const Right = () => {
    return (
        <div className='grid col-span-3'>
            <>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            </>
            
            
        </div>
    );
};

export default Right;