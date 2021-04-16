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
    return (
        <div>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" onClick={gotoBook} >Book</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Booking List</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Review</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={gotoAdmin}>Admin</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={gotoHome}>Home</a>
  </li>
</ul>
        </div>
    );
};

export default OrderNavbar;