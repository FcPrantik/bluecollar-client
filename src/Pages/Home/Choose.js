import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Choose = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 rounded-none">
                <div className='absolute top-0 left-0 md:top-40 md:left-10 bg-primary bg-opacity-80 p-20'>
                    <div className='grid grid-cols-4 mb-5'>
                        <span className='text-primary text-2xl bg-secondary p-5'>3956</span>
                        <span className='col-span-3 text-accent border-2 border-base-100 p-5 text-2xl'>Project Done</span>
                    </div>
                    <div className='grid grid-cols-4 mb-5'>
                        <span className='text-primary text-2xl bg-secondary p-5'>854</span>
                        <span className='col-span-3 text-accent border-2 border-base-100 p-5 text-2xl'>People Working</span>
                    </div>
                    <div className='grid grid-cols-4 mb-5'>
                        <span className='text-primary text-2xl bg-secondary p-5'>265</span>
                        <span className='col-span-3 text-accent border-2 border-base-100 p-5 text-2xl'>Business Partners</span>
                    </div>
                    <div className='grid grid-cols-4 mb-5'>
                        <span className='text-primary text-2xl bg-secondary p-5'>845+</span>
                        <span className='col-span-3 text-accent border-2 border-base-100 p-5 text-2xl'>Happy Customers</span>
                    </div>
                </div>
                <figure>
                    <img src="https://i.ibb.co/sRLswkh/choose-us.jpg" style={{ width: '750px' }} alt="worker" />
                </figure>
                <div className="card-body my-10">
                    <h2 className="text-primary">Few Reasons Why You Should Choose Us</h2>
                    <p className='text-neutral'>We are offering the following information's about us that what we actually do in the electrical sector. To Improve our customers’ lives by providing creative and cost-effective solutions to their needs.</p>
                    <div className="card-body py-10">
                        <h6 className='text-primary'> <FontAwesomeIcon className=' text-secondary mr-2' icon={faCircleCheck} />35 Years Experience</h6>
                        <p className='text-neutral'>Effective communication is the key to success for any business. From our office staff, to our field.</p>

                        <h6 className='text-primary'> <FontAwesomeIcon className=' text-secondary mr-2' icon={faCircleCheck} />Excellence Certificate</h6>
                        <p className='text-neutral'>We understand fully that your time is of extreme value. We are committed to meeting deadlines.</p>

                        <h6 className='text-primary'> <FontAwesomeIcon className=' text-secondary mr-2' icon={faCircleCheck} />Affordable Price</h6>
                        <p className='text-neutral'>We adhere strictly to the current National Electrical Code, and we conduct regular in-house sessions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;