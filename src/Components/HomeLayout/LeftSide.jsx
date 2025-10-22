import React, { Suspense } from 'react';
import Categories from '../Categories';
import { PropagateLoader, PulseLoader } from 'react-spinners';

const LeftSide = () => {

    return (
        <div>
            <Suspense fallback={<PulseLoader speedMultiplier={2} />}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftSide;