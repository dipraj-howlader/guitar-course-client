import React, { useContext, useEffect, useState } from 'react';
import { UserContext1 } from '../../../App';

const ExplainDashboard = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext1);
    const {userInfo, id, paymentType ,date} = props.order;
    const { buyerName , buyerEmail, serviceName,servicePrice } = userInfo;
    const [useAdmin, setUseAdmin] = useState(null);
    const [useAdminEmail, setUseAdminEmail] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/admin')
        .then(res => res.json())
        .then(data => setUseAdmin(data))
    },[])
    let adminEmail = '';

    for (let i = 0; i < useAdmin?.length; i++) {
        adminEmail = useAdmin[i].admin; 
        console.log(adminEmail);
        if(loggedInUser.email ===adminEmail){
            return(
                <div className="row p-2">
                <div className="col-md-2">
                    <h6>{buyerName}</h6>
                </div>
                <div className="col-md-3">
                    <h6 className="text-wrap">{buyerEmail}</h6>
                </div>
                <div className="col-md-2">
                    <h6>{serviceName}</h6>
                </div>
                <div className="col-md-2">
                    <h6>${servicePrice}</h6>
                </div>
                <div className="col-md-1">
                    <h6>{paymentType}</h6>
                </div>
                <div className="col-md-2">
                    <h6>{date}</h6>
                </div>
            </div> 
            )
        }
        else if(buyerEmail === loggedInUser.email){
            return(
                <div className="row p-2">
                <div className="col-md-2">
                    <h6>{buyerName}</h6>
                </div>
                <div className="col-md-3">
                    <h6 className="text-wrap">{buyerEmail}</h6>
                </div>
                <div className="col-md-2">
                    <h6>{serviceName}</h6>
                </div>
                <div className="col-md-2">
                    <h6>${servicePrice}</h6>
                </div>
                <div className="col-md-1">
                    <h6>{paymentType}</h6>
                </div>
                <div className="col-md-2">
                    <h6>{date}</h6>
                </div>
            </div>   
            )
        }
      
    }
    

    return (
        <div>
            
        </div>
    );
};

export default ExplainDashboard;