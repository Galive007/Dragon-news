import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-6'>
            <h2 className='text-primary font-semibold text-xl'>Find Us On</h2>
            <div>
                <ul className="menu bg-base-100 rounded-xl w-full *:outline *:outline-base-300 *:text-secondary
                 *:px-3 *:py-2 *:text-[16px]">
                    <li><a><FaFacebook></FaFacebook> Facebook</a></li>
                    <li><a><FaTwitter></FaTwitter> Twitter</a></li>
                    <li><a><FaInstagram></FaInstagram> Instagram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default FindUs;