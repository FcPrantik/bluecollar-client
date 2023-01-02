import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Home/firebase.init';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MEDOEIWTPCOc1oJoezbNjgoykLa7x4PVUsFL4w8FSwe67R9XNIUG2FarjYLByyldJSuoUw0ze1dkbxVZHoPrWUz00j0GU6MWJ');

const MyOrders = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { planID } = useParams();
    const [plan, setPlan] = useState({});
    const [user] = useAuthState(auth);

    // const handlePlaceOrder = event => {
    //     event.preventDefault();
    //     const order = {
    //         name: user.displayName,
    //         email: user.email,
    //         planID: planID,
    //         service: plan.name,
    //         price: plan.price
    //     }
    //     axios.post('http://localhost:4000/order', order)
    //         .then(response => {
    //             response && toast("Your Order is Booked")
    //             // const {data} = response;
    //             // if(data.insertedID){
    //             //     toast('Your order is booked');
    //             // }
    //         }
    //         )
    // }

    useEffect(() => {
        const url = `http://localhost:4000/plan/${planID}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPlan(data));
    })

    return (
        <div>
            <form className='p-5' onSubmit=''>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={user.displayName}
                        className="input rounded-none w-full max-w-xs"
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        value={user.email}
                        className="input rounded-none w-full max-w-xs"
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Service</span>
                    </label>
                    <input
                        type="text"
                        value={plan.name}
                        className="input rounded-none w-full max-w-xs"
                    />
                    <p className='font-bold text-blue-500'>You have to pay ${plan.price} to get this service</p>
                </div>
                {/* <input className="btn btn-primary mt-5 text-base-100 normal-case rounded-none hover:bg-secondary hover:text-primary max-w-xs" type="submit" value='Place Order' /> */}
            </form>
            <div className="card w-96 m-5 bg-white text-primary-content">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm plan={plan} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;