import React from 'react';
import Maincontent from '../mainstructure/Maincontent';
// import Left from '../mainstructure/Left';
import Right from '../mainstructure/Right';
import Leftside from '../mainstructure/Leftside';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className='grid grid-cols-12 w-11/12   mt-5 mx-auto'>
           <Leftside></Leftside>
        <Outlet></Outlet>
            <Maincontent></Maincontent>
            <Right></Right>
        </div>
    );
};

export default MainContent;