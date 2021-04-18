import React, { useEffect, useState } from 'react';
import ExplainDashboard from '../ExplainDashboard/ExplainDashboard';

const Dashboard = () => {
    const [userOrder, setUserOrder] = useState(null);
        
        useEffect(()=> {
            fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setUserOrder(data))
        },[])
    return (
        <div>
            <div>
            <div className="row p-5">
                        <div className="col-md-2">
                            <h6>Name</h6>
                        </div>
                        <div className="col-md-3">
                            <h6>Email</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Service</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Service Price</h6>
                        </div>
                        <div className="col-md-1">
                            <h6>Pay with</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Order Date</h6>
                        </div>
            </div>

            </div>
            <div>
            {
            userOrder?.map(order => <ExplainDashboard order={order}></ExplainDashboard> )
                 }
            </div>
        

        </div>
    );
};

export default Dashboard;