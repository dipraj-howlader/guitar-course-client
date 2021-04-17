import React, { useContext, useState }  from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../../ProcessPayment/Payment/Payment';
import './Orderlist.css'

const Orderlist = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userInfo , setUserInfo] = useContext(UserContext);



  const history = useHistory()
const gotoPayment =(event) =>{
  history.push('/payment');
  const buyerMame = event.target.parentElement.elements[0].value;
  const buyerEmail =  event.target.parentElement.elements[1].value;
  const info ={
    buyerMame,
    buyerEmail
  }
  setUserInfo(info)
}

  

  return (
    <div>
   <form action="">
     <input value={loggedInUser.name} type="text"/>
     <input value={loggedInUser.email} type="text"/>
     <button onClick={gotoPayment} type="button" class="btn btn-success">Success</button>
   </form>
    </div>
  );
};

export default Orderlist;