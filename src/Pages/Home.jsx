import React from 'react';
import { Navigate } from 'react-router';
import { BarLoader } from 'react-spinners';

const Home = () => {
    return (
        <div>
            <BarLoader speedMultiplier={3} />
            <Navigate to='/category/1'></Navigate>
        </div>
    );
};

export default Home;