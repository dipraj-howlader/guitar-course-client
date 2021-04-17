import React from 'react';
import { useHistory, useParams } from 'react-router';
import './ExplainService.css'

const ExplainService = (props) => {
    const history = useHistory();
    
    const gotoOrderPage = (id) =>{
        history.push(`/order/${id}`)
    }
    const {name , icon, description, price ,id} = props.service;
    // const { id } =useParams();

    return (
        <div className="col-md-4 service">
           <img src={icon} alt=""/>
            <h4>{name}</h4>
            <strong>${price}</strong>
            <p>{description}</p>
            <button onClick={() => gotoOrderPage(id)} type="button" class="btn btn-outline-secondary">Buy Now</button>
        </div>
    );
};

export default ExplainService;