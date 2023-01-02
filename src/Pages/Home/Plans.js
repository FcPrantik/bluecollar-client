import React from 'react';
import usePlans from '../../hooks/usePlans';
import Plan from './Plan';

const Plans = () => {

    const [plans] = usePlans()

    return (
        <div className='bg-accent py-40'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 px-5'>
                    <h2 className='text-primary'>Let’s Customize Work With Affordable Price</h2>
                    <p>This is passionate about delivering growth and the new possibilities in the field of electrical services. We have extensive experience of domestic and business electrical installations and no job is too small.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                    {
                        plans.map(plan => <Plan
                            key={Plan._id}
                            plan={plan}
                        >
                        </Plan>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Plans;