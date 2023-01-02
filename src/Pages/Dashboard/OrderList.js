import React from 'react';
import useOrders from '../../hooks/useOrders';
import Order from './Order';

const OrderList = () => {

    const [orderlist] = useOrders();
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderlist.map(order=><Order
                            key={order._id}
                            order={order}
                            >
                            </Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;