import React, { useEffect, useState } from 'react';
import ExplainDashboard from '../ExplainDashboard/ExplainDashboard';

const Dashboard = () => {
    const [userOrder, setUserOrder] = useState(null);
        
        useEffect(()=> {
            fetch('https://evening-chamber-15530.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setUserOrder(data))
        },[])
    return (
        <div className="">
            <div>
            <div style={{backgroundColor:'whitesmoke',boxShadow:'1px 1px 10px gray'}} className="row m-1 p-2">
                        <div className="col-md-2">
                            <h6>Name</h6>
                        </div>
                        <div className="col-md-3">
                            <h6>Email</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Course</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Course Price</h6>
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