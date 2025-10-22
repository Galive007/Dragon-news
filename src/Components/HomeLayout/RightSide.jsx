import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './Qzone';
import HeroImg from './HeroImg';

const RightSide = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <HeroImg></HeroImg>
        </div>
    );
};

export default RightSide;