import React from 'react';
import { useHistory } from 'react-router';
import './ExplainService.css'

const ExplainService = (props) => {
    const history = useHistory();

    const gotoOrderPage = () =>{
        history.push('/order')
    }
    const {name , icon, description, price} = props.service
    return (
        <div className="col-md-4 service">
           <img src={icon} alt=""/>
            <h4>{name}</h4>
            <strong>${price}</strong>
            <p>{description}</p>
            <button onClick={gotoOrderPage} type="button" class="btn btn-outline-secondary">Buy Now</button>
        </div>
    );
};

export default ExplainService;