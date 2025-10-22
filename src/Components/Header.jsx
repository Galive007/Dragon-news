import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-5'>
            <img className='' src={logo} alt="" />
            <p className=' text-secondary'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-secondary'>{format(new Date(), "EEEE, MMMM dd, uuuu")}</p>
        </div>
    );
};

export default Header;