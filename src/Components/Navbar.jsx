import React from 'react';
import { NavLink } from 'react-router';
import NavImg from '../assets/user.png'
import MyLink from './MyLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <div className=''></div>
            <div className='nav flex gap-6 '>
                <MyLink to='/' className='text-secondary'>Home</MyLink>
                <MyLink to='/about' className='text-secondary'>About</MyLink>
                <MyLink to='career' className='text-secondary'>Career</MyLink>
                {/* <NavLink to='/career'>Career</NavLink> */}
            </div>
            <div className='login-btn flex items-center gap-3'>
                <img src={NavImg} alt="" />
                <button className='btn bg-primary text-base-100 px-8 py-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;