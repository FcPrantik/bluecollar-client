import React from 'react';

const Experience = () => {
    return (
        <div>
            <div className="bg-base-100 md:container md:mx-auto py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://assets.website-files.com/62512ef8a786a9a25be322b0/6253d6cb20ab86a85649c6a3_home-intro-image.jpg" alt='home' className="max-w-sm md:max-w-xl rounded-lg shadow-2xl" />
                    <div className='ml-10'>
                        <h2 className="text-primary">We Provide Your Future</h2>
                        <p className="py-6 text-neutral">Bluecollar Electrical services was established in 2008. We are trusted and reliable electricians who serve customers in the city as well as throughout United States Of America. <br /> <br />
                            We have extensive experience of domestic and business electrical installations and no job is too small. Our customers value our professionalism, work ethic and our competitive prices.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='bg-accent text-center px-20 py-10'>
                                <span className=' text-7xl font-sans font-bold text-secondary'>35</span>
                                <p className='text-primary text-xl font-bold'>Years Of Experience</p>
                            </div>
                            <div>
                                <ol className='leading-9 ml-5 mt-8 text-neutral'>
                                    <li>- For all your system requirements</li>
                                    <li>- All work undertaken by qualified</li>
                                    <li>- Experienced office staff on hand</li>
                                    <li>- A Full Guarantee On Workmanship</li>
                                    <li>- Properties at a reasonable price</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;