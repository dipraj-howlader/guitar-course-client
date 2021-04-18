import React from 'react';
import { useHistory, useParams } from 'react-router';

const OrderNavbar = () => {

    const history = useHistory();
    const gotoBook =() => {
        history.push('/order')
    }
    const gotoHome =() => {
        history.push('/home')
      }
      const gotoReview = () =>{
        history.push('/customer/review')
      }
      const gotoDashboard = () =>{
        history.push(`/dashboard`)
      }
    return (
        <div>
            <ul className="nav justify-content-center">
        
  <li className="nav-item">
    <a className="nav-link" onClick={gotoDashboard}>Course List</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={gotoReview}>Review</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={gotoHome}>Home</a>
  </li>
</ul>
        </div>
    );
};

export default OrderNavbar;