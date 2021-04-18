import React from 'react';
import { useForm } from "react-hook-form";
import OrderNavbar from '../UserOrderInfo/OrderNavbar/OrderNavbar';
import './ReviewForm.css';


const ReviewForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('https://evening-chamber-15530.herokuapp.com/addReview',{
        method:'POST',
         headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res => alert("review added") )
  }

    return (
       <div>
           <div>
            <OrderNavbar></OrderNavbar>
           </div>
           <div className="reviewForm">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your name" {...register("yourName")} />
      <br/>
      <input placeholder="Your Company" {...register("companyName")} />
      <br/>
      <input placeholder="Description" {...register("reviewDcption")} />
      <br/>
      <button type="button submit" class="btn btn-outline-success">Click Here</button>
    </form>
        </div>
       </div>
    );
};

export default ReviewForm;