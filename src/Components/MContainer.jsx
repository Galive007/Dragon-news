import React from 'react';

const MContainer = ({ className, children }) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default MContainer;