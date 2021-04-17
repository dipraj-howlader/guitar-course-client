import React from 'react';
import { useHistory } from 'react-router';

const OrderNavbar = () => {
    const history = useHistory();
    const gotoBook =() => {
        history.push('/order')
    }
    const gotoAdmin = ()=>{
        history.push('/admin')
    }
    const gotoHome =() => {
        history.push('/home')
      }
      const gotoReview = () =>{
        history.push('/customer/review')
      }
    return (
        <div>
            <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" onClick={gotoBook} >Book</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Booking List</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={gotoReview}>Review</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={gotoAdmin}>Admin</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={gotoHome}>Home</a>
  </li>
</ul>
        </div>
    );
};

export default OrderNavbar;