import React from 'react';

const ServiceRow = ({service}) => {

    const {name} = service;

    const handleDelete = id => {
        const url = `http://localhost:4000/service/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <th>
                <button onClick={() => handleDelete(service._id)} className="btn btn-ghost btn-xs">delete</button>
            </th>
        </tr>
    );
};

export default ServiceRow;