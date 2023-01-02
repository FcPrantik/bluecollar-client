import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const icon = <FontAwesomeIcon className=' text-secondary mr-2' icon={faCircleCheck} />;

const Plan = ({ plan }) => {

    const { name, price, _id } = plan;

    return (
        <div className="card max-w-screen bg-base-100 shadow-xl rounded-none my-10">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='grid grid-cols-2'>
                    <h3>${price}</h3>
                    <p className='py-2'>Per Visit Charge</p>
                </div>
                <div className='divider'></div>
                <p>{icon} Electrical Service</p>
                <p>{icon} Distribution Power Systems</p>
                <p>{icon} High & Medium Voltages</p>
                <p>{icon} Industrial Control Systems</p>
                <p>{icon} Switch Installation</p>
                <p>{icon} Generator Installations</p>
                <p>{icon} Innovative Construction</p>
                <div className="grid grid-col py-5">
                    <Link to={`/dashboard/${_id}`}>
                        <button className="btn btn-secondary normal-case rounded-none hover:bg-base-100">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Plan;