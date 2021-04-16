import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const PaymentProcess = ({register}) => {
    const stripePromise = loadStripe('pk_test_51IeDRsSCrZKKBxERrV1azUUydjuMQwrdYLRQ4aLUB53c985jpFnNwfKcIWb5WIOyXDlaEX19pMNTK64SuJNYyvq200TfrhfM8h');

    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm ></SimpleCardForm>
                </Elements>
        </div>
    );
};

export default PaymentProcess;