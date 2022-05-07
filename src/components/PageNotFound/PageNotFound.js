import React from 'react';
import image from '../../images/404/404.jpg';

const PageNotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={image} alt="" />
        </div>
    );
};

export default PageNotFound;