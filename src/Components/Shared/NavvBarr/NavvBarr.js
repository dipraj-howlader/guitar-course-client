import React from 'react';
import img from '../../../Images/logo.png';
import { Nav, Navbar } from "react-bootstrap";

const NavvBarr = () => {
    return (
        <div style={{position:'absolute',zIndex:'10'}}>
             <Navbar expand="lg" >
                <Navbar.Brand className="col-4" href="#home">
                    <img style={{width:'100px', borderRadius:'50%'}} src={img} alt=""/>
                    <span className="text-black ps-3"><strong>Learn Guitar With Dipraj</strong></span>
            
                  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <div style={{paddingLeft:'200px'}}>
         <Nav>
            <Nav.Link   className="text-success" href="home">Home</Nav.Link>
            <Nav.Link   className="text-success" href="about">About</Nav.Link>
            <Nav.Link   className="text-success" href="dentalService">Dental Service</Nav.Link>
            <Nav.Link    className="text-success" href="reviews">Reviews</Nav.Link>
            <Nav.Link   className="text-success" href="blog">Blog</Nav.Link>
            <Nav.Link   className="text-success" href="contactUs">Contact Us</Nav.Link>
          </Nav>
         </div>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavvBarr;