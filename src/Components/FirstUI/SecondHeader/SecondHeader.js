import React from 'react';
import './SecondHeader.css';
import imgTwo from '../../../Images/navImg.jpg'

const SecondHeader = () => {
    return (
        <div className="header-container">
            <div className="headerfirst">
                    <img className="img-fluid" src={imgTwo}  alt="" />
                 
             </div>
                <div className="headersnd">
                    <h1>Do you want to play Guitar?</h1>
                    <h2> This is the world most popular website to learn Guitar easily</h2>
                    <br/>
                    <br/>
                    <br/>
                    <button type="button" class="btn btn-outline-dark btn-lg">Purchase Guitar Course</button>
                    <br/>
                    <br/>
                    
              </div>
        </div>
    );
};

export default SecondHeader;