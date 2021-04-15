import React from 'react';
import './ExplainReviews.css';


const ExplainReviews = (props) => {
    const {name, companyName }= props.review
    return (
        <div className="col-md-3 explaineReviews pt-5">
            <h3>{name}</h3>
            <h6>{companyName}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod enim accusamus maxime impedit modi!</p>

        </div>
    );
};

export default ExplainReviews;