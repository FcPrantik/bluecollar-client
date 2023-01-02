import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Home/firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const History = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:4000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-5'>

            {
                !orders.length && <div >
                    <h2>You have not order any of our services</h2>
                </div>
            }

            {
                orders.map(order =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{order.package}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p className='text-red-500'>{order.status}</p>
                            <div className="card-actions justify-end">
                                <h4>${order.amount}</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default History;