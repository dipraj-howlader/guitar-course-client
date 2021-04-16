import React from 'react';
import Orderlist from '../../Admin/OrderList/Orderlist';
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