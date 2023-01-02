import React from 'react';
import bride from '../../images/bride.svg';
import building from '../../images/building.svg';
import construction from '../../images/construction.svg';
import  cpmpany from '../../images/ cpmpany.svg';

const Clients = () => {
    return (
        <div className='md:container md:mx-auto py-20'>
            <div className='text-center text-primary'>
                <h2 className='text-primary'>Our Trusted Big Clients!</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center py-10'>
                <img className='mb-5' src={bride} alt="bride" />
                <img className='mb-5' src={building} alt="building" />
                <img className='mb-5' src={construction} alt="construction" />
                <img className='mb-5' src={cpmpany} alt="cpmpany" />
            </div>
        </div>
    );
};

export default Clients;