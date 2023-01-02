import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <button className='btn loading'>loading</button>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=><UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            >
                            </UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;