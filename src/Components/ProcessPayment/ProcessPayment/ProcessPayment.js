import React, { useContext } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import {  UserContext2 } from '../../../App';

const ProcessPayment = () => {
  const date = new Date().toDateString()

  const stripe = useStripe();
  const elements = useElements();
  const [userInfo , setUserInfo] = useContext(UserContext2);

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // console.log(userInfo);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        // console.log(paymentMethod.id)
        const userCardandInfo = {
          userInfo,
      id: paymentMethod.id,
      paymentType:paymentMethod.card.funding,
      date: date

        }
        console.log(userCardandInfo);
        //send to backend
        
        fetch('http://localhost:5000/addOrder',{
          method:'POST',
           headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(userCardandInfo)
        })
        .then(res => console.log('review') )
      
    }


    
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};

export default ProcessPayment;