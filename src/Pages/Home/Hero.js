import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero justify-start min-h-screen" style={{ backgroundImage: `url("https://uploads-ssl.webflow.com/62512ef8a786a9a25be322b0/62678a2322310ae5f6ab7c98_hero-banner-image.jpg")` }}>
                <div className="text-left text-white">
                    <div className="max-w-3xl ml-20">
                        <h1 className='text-left mb-5'>A Recognized Leader In Services Industry</h1>
                        <button className='btn btn-secondary normal-case rounded-none text-primary text-lg hover:bg-base-100 hover:text-primary'>View Services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;