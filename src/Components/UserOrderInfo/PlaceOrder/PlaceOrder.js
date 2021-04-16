import React from 'react';
import Orderlist from '../OrderList/Orderlist';
import OrderNavbar from '../OrderNavbar/OrderNavbar';
import './PlaceOrder.css';


const PlaceOrder = () => {
    return (
        <div>
            <OrderNavbar></OrderNavbar>
            <Orderlist></Orderlist>
        </div>
    );
};

export default PlaceOrder;