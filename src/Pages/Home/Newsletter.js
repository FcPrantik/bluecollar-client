import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-secondary py-20'>
            <div className='md:container md:mx-auto lg:mx-auto grid grid-cols-1 md:grid-cols-2 px-5'>
                <div className='mb-5 px-10'>
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Stay in touch with us to get latest news. We are here to fit the needs of your electrical services for your dream building.</p>
                </div>
                <div className="relative mt-10">
                    <input type="text" placeholder="Enter Your Email" className="input border-white rounded-none input-ghost w-full pr-16" />
                    <button className="btn btn-accent normal-case hover:btn-primary absolute top-0 right-0 rounded-none">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;