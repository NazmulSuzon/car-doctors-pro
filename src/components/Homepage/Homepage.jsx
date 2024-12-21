import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='bg-base-100'>
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default Homepage;