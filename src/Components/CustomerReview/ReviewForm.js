import React from 'react';
import { useForm } from "react-hook-form";
import OrderNavbar from '../UserOrderInfo/OrderNavbar/OrderNavbar';

const ReviewForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/addReview',{
        method:'post',
         headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res => console.log('review') )
  }

    return (
       <div>
           <div>
            <OrderNavbar></OrderNavbar>
           </div>
           <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your name" {...register("yourName")} />
      <br/>
      <input placeholder="Your Company" {...register("companyName")} />
      <br/>
      <input placeholder="Description" {...register("reviewDcption")} />
      <br/>
      <input type="submit" />
   
    </form>
        </div>
       </div>
    );
};

export default ReviewForm;