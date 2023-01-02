import React from 'react';
import useServices from '../../hooks/useServices';
import Service from './Service';

const Services = () => {

    const [services] = useServices()

    return (
        <div className='bg-base-200'>
            <div className='py-40 md:container md:mx-auto'>
                <div className='text-center px-5'>
                    <h1 className='text-primary mt-40'>Our Services</h1>
                    <p className='text-neutral mb-14'>We offers a comprehensive range of electrical services for domestic <br /> and commercial properties at a reasonable price.</p>
                </div>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;