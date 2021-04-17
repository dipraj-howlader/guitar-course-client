import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext3 } from '../../../App';

import './ExplainService.css'

const ExplainService = (props) => {
    const [courseService, setCourseService] = useContext(UserContext3);

    const history = useHistory();
    const {_id,data,imageup} = props.service;
    const {Pprice,Pname,Pdetails} =data;
    const orderPageInfo = {
        data,
        _id
    }
    const gotoOrderPage = (_id) =>{
        history.push(`/order/${_id}`)
        if(props.service._id === _id){
            setCourseService(orderPageInfo)
        }

    }
   

    return (
        <div className="col-md-4 service">
           <img src={imageup} alt=""/>
            <h4>{Pname}</h4>
            <strong>${Pprice}</strong>
            <p>{Pdetails}</p>
            <button onClick={() => gotoOrderPage(_id)} type="button" class="btn btn-outline-secondary">Buy Now</button>
        </div>
    );
};

export default ExplainService;