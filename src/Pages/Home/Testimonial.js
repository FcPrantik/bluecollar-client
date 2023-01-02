import React from 'react';
import useReviews from '../../hooks/useReviews';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import "./Testimonial.css";
// import required modules
import { Navigation } from "swiper";

const phone = <FontAwesomeIcon className=' text-base-100 mr-2' icon={faPhone} />;

const Testimonial = () => {

    const [reviews] = useReviews()

    return (
        <div className='bg-primary'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='grid grid-rows-0 p-5'>
                        <div>
                            <h2 className='text-base-100 py-10'>Customers Says</h2>
                        </div>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {
                                reviews.map(review =>
                                    <SwiperSlide>
                                        <div className='p-8'>
                                            <div className="">
                                                <div className="grid grid-cols-7">
                                                    <div>
                                                        <img src="https://placeimg.com/192/192/people" style={{ 'borderRadius': '50%', 'width': '75px' }} alt='man' />
                                                    </div>
                                                    <div className='col-start-2 col-end-5 md:col-end-4 md:pt-4'>
                                                        <h5>{review.name}</h5>
                                                    </div>
                                                    <div className='col-start-7'>
                                                        <h2 className='font-serif bg-secondary rounded-full md:pt-2'>"</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='divider'></div>
                                            <div className='text-left pb-20'>
                                                <p>{review.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                            }
                        </Swiper>
                        <div className='p-20 bg-secondary mt-5 text-base-100'>
                            <h5 className='text-primary'>99.9% Customer Satisfaction Based</h5>
                            <p className='text-primary py-3'>If you have any questions or need help contact with our team, or call</p>
                            <h3> {phone} (003) 123 456 7890</h3>
                        </div>
                    </div>
                    <div className='grid grid-rows grid-flow-col-2 p-5'>
                        <div>
                            <h2 className='text-base-100 py-10'>Appointment Form</h2>
                        </div>
                        <div className="card-body bg-accent self-center py-40 row-span-6 p-10">
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your Email" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone Number" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Date" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <textarea type="text" placeholder="Service Description" className="input input-bordered rounded-none" style={{ height: '150px' }} />
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-secondary normal-case rounded-none hover:bg-base-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;