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
        <div style={{backgroundColor:'rgb(214, 181, 158)',paddingTop:'10px',paddingBottom:'10px',cursor:'pointer'}}>
      <h3 style={{textAlign:'center',color:'white'}}>Learn Guitar with Dipraj</h3>

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