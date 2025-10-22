import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-300 px-6 py-4 flex items-center gap-5'>
            <p className='bg-[var(--color-content)] px-4 py-2 text-base-100'>Latest</p>
            <Marquee pauseOnHover>
                <p className='text-primary font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor impedit suscipit eum ullam quam reprehenderit assumenda omnis magni, aliquid maiores tempore dolore eaque velit nulla cum quis voluptate.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;