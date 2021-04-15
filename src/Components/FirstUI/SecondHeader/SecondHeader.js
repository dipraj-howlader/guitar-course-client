import React from 'react';
import './SecondHeader.css';
import imgTwo from '../../../Images/navImg.jpg'

const SecondHeader = () => {
    return (
        <div className="header">
            <img className="img-fluid" src={imgTwo}  alt="" />
            <h1>Learn Guitar From Here</h1>
                 
        </div>
    );
};

export default SecondHeader;