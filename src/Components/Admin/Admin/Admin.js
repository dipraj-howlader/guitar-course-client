import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Orderlist from '../OrderList/Orderlist';

const Admin = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <Orderlist></Orderlist>
        </div>
    );
};

export default Admin;