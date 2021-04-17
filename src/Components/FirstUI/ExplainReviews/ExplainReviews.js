import React from 'react';
import './ExplainReviews.css';


const ExplainReviews = (props) => {
    const {yourName, companyName, reviewDcption }= props.review
    return (
        <div className="col-md-3 explaineReviews pt-5">
            <h3>{yourName}</h3>
            <h6>{companyName}</h6>
            <p className="text-secondary">{reviewDcption}</p>

        </div>
    );
};

export default ExplainReviews;