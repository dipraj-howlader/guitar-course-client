import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import OrderNavbar from '../../UserOrderInfo/OrderNavbar/OrderNavbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { Elements } from '@stripe/react-stripe-js';
import './Payment.css'


const Payment = () => {

    const stripePromise = loadStripe('pk_test_51IeDRsSCrZKKBxERrV1azUUydjuMQwrdYLRQ4aLUB53c985jpFnNwfKcIWb5WIOyXDlaEX19pMNTK64SuJNYyvq200TfrhfM8h');    return (
        <div>
           <div>
               <div>
                    <OrderNavbar></OrderNavbar>
               </div>
               <div className="payment">
                <Elements stripe={stripePromise}>
                <ProcessPayment></ProcessPayment>
            </Elements>
               </div>
           </div>

        </div>
    );
};

export default Payment;