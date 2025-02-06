import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import MainContent from '../components/MainContent/MainContent';

const HomeLayout = () => {
    return (
        <div className='font-Poppins'>
            <Header></Header>
            <section className='w-11/12 mx-auto '>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </section>
            <MainContent></MainContent>
            
        </div>
    );
};

export default HomeLayout;