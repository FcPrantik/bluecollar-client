import React from 'react';
import Choose from './Choose';
import Clients from './Clients';
import Experience from './Experience';
import Hero from './Hero';
import MainServices from './MainServices';
import Newsletter from './Newsletter';
import Plans from './Plans';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Experience></Experience>
            <MainServices></MainServices>
            <Services></Services>
            <Choose></Choose>
            <Testimonial></Testimonial>
            <Clients></Clients>
            <Plans></Plans>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;