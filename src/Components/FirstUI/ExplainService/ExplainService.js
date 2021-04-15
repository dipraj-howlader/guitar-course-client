import React from 'react';
import './ExplainService.css'

const ExplainService = (props) => {
    const {name , icon, description, price} = props.service
    return (
        <div className="col-md-4 service">
            <img src={icon} alt=""/>
            <h4>{name}</h4>
            <strong>${price}</strong>
            <p>{description}</p>
            <button type="button" class="btn btn-outline-secondary">Buy Now</button>
        </div>
    );
};

export default ExplainService;