import React, { useContext, useEffect, useState }  from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import {  UserContext1, UserContext2, UserContext3 } from '../../../App';
import Payment from '../../ProcessPayment/Payment/Payment';
import './Orderlist.css'

const Orderlist = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext1);
  const [userInfo , setUserInfo] = useContext(UserContext2);
  const [courseService, setCourseService] = useContext(UserContext3);

console.log(courseService.data.Pname)



  const history = useHistory()
const gotoPayment =(event) =>{
  history.push('/payment');
  const buyerName = event.target.parentElement.elements[0].value;
  const buyerEmail =  event.target.parentElement.elements[1].value;
  const info ={
    buyerName,
    buyerEmail
  }
  setUserInfo(info)
}




  return (
    <div className="orderInfo">
   <form action="">
     <p>Your Name:</p>
     <input value={loggedInUser.name} type="text"/>
     <br/>
     <p>Your Email Address:</p>
     <input value={loggedInUser.email} type="text"/>
     <br/>
    <p>Course you want to purchase:</p>
     <input value={courseService.data.Pname} type="text"/>
    <br/>
    <p style={{color:'green'}}>This course will be charged <span style={{color:'red'}}>${courseService.data.Pprice}</span></p>
     <button onClick={gotoPayment} type="button" class="btn btn-success">Continue to Pay</button>
   </form>
    </div>
  );
};

export default Orderlist;