import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChecKoutForm from '../../DashboardPage/ChecKoutForm/ChecKoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const PayMent = () => { 
    const booking = useLoaderData()
    const { appointmentData, price, slot, treatment } = booking;


    return (

        <div>
            <div className="text-2xl">payment: <strong>{treatment}</strong></div>
            <p>please pay <strong>${price}</strong> AppointmentName: {appointmentData} Time: {slot}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <ChecKoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );

};

export default PayMent;