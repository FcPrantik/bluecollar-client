import React from 'react';

const Service = (props) => {
    const { name, img, info } = props.service;
    return (
        <div>
            <div className="card max-w-screen rounded-none bg-primary text-primary-content mb-6">
                <div className="card-body">
                    <img src={img} className="mb-3" style={{width:"48px"}} alt="" />
                    <h5 className="text-secondary">{name}</h5>
                    <p className='text-base-100 mb-3'>{info}</p>
                    <div className="card-actions text-accent justify-start">
                        <button className="link link-hover hover:text-secondary font-bold">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;