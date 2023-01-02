import React, { useState } from 'react';
import MainService from './MainService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHouse, faIndustry } from '@fortawesome/free-solid-svg-icons';
import Categories from './Category';

const MainServices = () => {


    const [data, setData] = useState(Categories);

    const filterResult = (catInfo) => {
        const result = Categories.filter((curData) => {
            return curData.category === catInfo;
        });
        setData(result);
    }

    return (
        <div className='bg-secondary'>
            <div className='relative top-32'>
                <div className='text-center md:container md:mx-auto'>
                    <h1 className='text-primary'>Professional Main Services</h1>
                    <p className='py-5 text-primary'>We have extensive experience of domestic and business electrical installations and no job is too small. Our customers value our professionalism, work ethic and our competitive prices.</p>
                    <div className='flex flex-col md:flex-row justify-center'>
                        <button onClick={() => filterResult('commercial')} className='btn btn-lg btn-outline outline-primary text-primary rounded-none mx-5 my-3 focus:bg-base-100 hover:bg-base-100 hover:text-primary normal-case'>
                            <FontAwesomeIcon className='mr-2' icon={faBuilding}></FontAwesomeIcon>Commercial
                        </button>
                        <button onClick={() => filterResult('residential')} className='btn btn-lg btn-outline outline-primary text-primary rounded-none mx-5 my-3 focus:bg-base-100 hover:bg-base-100 hover:text-primary normal-case'>
                            <FontAwesomeIcon className='mr-2' icon={faHouse}></FontAwesomeIcon> Residential
                        </button>
                        <button onClick={() => filterResult('industrial')} className='btn btn-lg btn-outline outline-primary text-primary rounded-none mx-5 my-3 focus:bg-base-100 hover:bg-base-100 hover:text-primary normal-case'>
                            <FontAwesomeIcon className='mr-2' icon={faIndustry}></FontAwesomeIcon> Industrial
                        </button>
                    </div>
                </div>
                {
                    data.slice(0,1).map((values) => {
                        return (
                            <MainService
                                key={values._id}
                                values={values}
                            >
                            </MainService>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MainServices;