import React, { useEffect, useState } from 'react';
import './Services.css';
import firstIcon from '../../../Images/guitar1.png'; 
import ExplainService from '../ExplainService/ExplainService';

const Services = () => {
    const [serviceData, setServiceData] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])
    return (
        <section className="backgroundClr color row service-container pt-5">
            <h1 style={{paddingBottom:'20px'}}>Our Awesome <span style={{color:'blue'}}>Courses</span></h1>
           {
                serviceData?.map(service => <ExplainService service={service}></ExplainService>)
            }
        </section>
    );
};

export default Services;