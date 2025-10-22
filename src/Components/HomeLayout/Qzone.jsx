import React from 'react';
import swimming from '../../assets/swimming.png'
import classes from '../../assets/class.png'
import playground from '../../assets/playground.png'
const QZone = () => {
    return (
        <div className='bg-base-200 px-2 py-6'>
            <h2 className='text-primary font-semibold text-xl'>Q-Zone</h2>
            <div className=''>
                <img className='w-full' src={swimming} alt="" />
                <img className='w-full' src={classes} alt="" />
                <img className='w-full' src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;