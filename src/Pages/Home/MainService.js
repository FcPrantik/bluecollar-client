import React from 'react';

const MainService = (props) => {

    const { name, info, img } = props.values;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-base-100 md:container md:mx-auto py-20 shadow-xl mt-5 mx-5'>
            <div className='px-16 mt-10'>
                <h2>{name}</h2>
                <p className='text-neutral'>{info}</p>
            </div>
            <div>
                <img src={img} alt="" className="max-w-sm md:max-w-md ml-10" />
            </div>
        </div>
    );
};

export default MainService;