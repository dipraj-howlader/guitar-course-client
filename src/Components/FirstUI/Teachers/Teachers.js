import React from 'react';
import t1 from '../../../Images/t1.jpg';
import t2 from '../../../Images/t2.jpg';
import t3 from '../../../Images/t3.jpg';
import t4 from '../../../Images/t4.jpg';
import './Teachers.css';


const Teachers = () => {
return (
<div className="row teacher pt-3 pb-5 backgroundClr color">
    <h1 style={{textAlign:'center',paddingBottom:'25px'}}>Our honourable instructors</h1>
    <div className=" col-md-3">
        <div class="container">
            <img src={t1} alt="Avatar" class="image" />
            <div class="middle">
                <div class="text">Karimi</div>
            </div>
        </div>
    </div>
    <div className=" col-md-3">
        <div class="container">
            <img src={t2} alt="Avatar" class="image" />
            <div class="middle">
                <div class="text">Laboni</div>
            </div>
        </div>
    </div>
    <div className="col-md-3">
        <div class="container">
            <img src={t3} alt="Avatar" class="image" />
            <div class="middle">
                <div class="text">Flowra</div>
            </div>
        </div>
    </div>
    <div className=" col-md-3">
        <div class="container">
            <img src={t4} alt="Avatar" class="image" />
            <div class="middle">
                <div class="text">Roman</div>
            </div>
        </div>

    </div>
</div>
);
};

export default Teachers;