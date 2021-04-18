import React from 'react';

const ExplainDashboard = (props) => {
    const {userInfo, id, paymentType ,date} = props.order;
    const { buyerName , buyerEmail, serviceName,servicePrice } = userInfo;
    return (
        <div>
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
                    <h6>{servicePrice}</h6>
                </div>
                <div className="col-md-1">
                    <h6>{paymentType}</h6>
                </div>
                <div className="col-md-2">
                    <h6>{date}</h6>
                </div>
            </div>
        </div>
    );
};

export default ExplainDashboard;