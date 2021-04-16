import React from 'react';
import './Services.css';
import firstIcon from '../../../Images/guitar1.png'; 
import ExplainService from '../ExplainService/ExplainService';

const serviceFakeData = [
{
    name:'Basic Guitar',
    description :'Here you will learn only basic guitar structure,SarGam, Node, FritBoard, and etc!',
    price :'100',
    icon: firstIcon,
    id:'1'
},
{
    name:'Learn Chords',
    description :'Here you will learn all basic guitars theme adding with Chord. So, after learning chords you can play any song',
    price :'150',
    icon: firstIcon,
    id:'2'
},
{
    name:'Learn Solo and Riff',
    description :'Here you will learn Chords progression adding Solo, Riff and etc!  ',
    price :'250',
    icon: firstIcon,
    id:'3'
}
]
const Services = () => {
    return (
        <section className="backgroundClr color row service-container pt-5">
            <h1 style={{paddingBottom:'20px'}}>Our Awesome <span style={{color:'blue'}}>Courses</span></h1>
           {
                serviceFakeData.map(service => <ExplainService service={service}></ExplainService>)
            }
        </section>
    );
};

export default Services;