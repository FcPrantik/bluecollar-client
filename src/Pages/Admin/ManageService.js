import React from 'react';
import useServices from '../../hooks/useServices';
import ServiceRow from './ServiceRow';

const ManageService = () => {

    const [services] = useServices();


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <ServiceRow
                            key={service._id}
                            service={service}
                        >
                        </ServiceRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageService;