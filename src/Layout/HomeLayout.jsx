import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import MContainer from '../Components/MContainer';
import Navbar from '../Components/Navbar';
import LeftSide from '../Components/HomeLayout/LeftSide';
import RightSide from '../Components/HomeLayout/RightSide';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section>
                <MContainer>
                    <LatestNews></LatestNews>
                    <Navbar></Navbar>
                </MContainer>
            </section>
            <MContainer>
                <main className=' grid grid-cols-12 gap-3'>
                    <aside className='col-span-3'>
                        <LeftSide></LeftSide>
                    </aside>
                    <section className='main col-span-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='col-span-3'>
                        <RightSide></RightSide>
                    </aside>
                </main>
            </MContainer>
        </div>
    );
};

export default HomeLayout;