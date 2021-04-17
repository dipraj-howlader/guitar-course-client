import React from 'react';
import img from '../../../Images/logo.png';
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from 'react-router';

const NavvBarr = () => {
    const history = useHistory();
    const gotoLogin = () => {
      history.push('/login')
    }
    const gotoAdmin = () => {
      history.push('/admin')
    }
    const gotoReview  = () =>{
      history.push('/customer/review')
    }
    return (
        <div style={{position:'absolute',zIndex:'10'}}>
             <Navbar expand="lg" >
                <Navbar.Brand className="col-4" href="#home">
                    <img style={{width:'100px', borderRadius:'50%'}} src={img} alt=""/>
                    <span style={{fontSize:'35px'}} className="text-success ps-3"><strong>Learn Guitar With Dipraj</strong></span>
            
                  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <div style={{paddingLeft:'200px'}}>
         <Nav>
            <Nav.Link   className="text-white" href="home">Home</Nav.Link>
            <Nav.Link   className="text-white" onClick={gotoLogin}>Login</Nav.Link>
            <Nav.Link   className="text-white" onClick={gotoAdmin}>Admin</Nav.Link>
            <Nav.Link    className="text-white" onClick={gotoReview}>Reviews</Nav.Link>
            <Nav.Link   className="text-white" href="blog">Blog</Nav.Link>
            <Nav.Link   className="text-white" href="contactUs">Contact Us</Nav.Link>
          </Nav>
         </div>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavvBarr;