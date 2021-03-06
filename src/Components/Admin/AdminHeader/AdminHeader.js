import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext1 } from '../../../App';
import './AdminHeader.css';


const AdminHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext1);
  const [userOrder, setUserOrder] = useState(null);
  const [useAdmin, setUseAdmin] = useState(null);
  const history =  useHistory();
  const gotoHome =() => {
    history.push('/home')
  }
  const gotoAddService = () =>{
    history.push('/addService')
  }
  const gotoDashboard = () => {
    history.push('/dashboard')
  }
  const gotoMakeAdmin = () => {
    history.push('/makeAdmin')
  }
  const gotoManageService = () =>{
    history.push('/manageService')
  }

  useEffect(() => {
    fetch('https://evening-chamber-15530.herokuapp.com/admin')
    .then(res => res.json())
    .then(data => setUseAdmin(data))
},[])
let adminEmail = '';

for (let i = 0; i < useAdmin?.length; i++) {
  adminEmail = useAdmin[i].admin;  
  if(adminEmail === loggedInUser.email){
    if(loggedInUser.email !== adminEmail){
    
      return(
        <div className="headerAdmin">
                  <h3 style={{textAlign:'center'}}>Learn Guitar with Dipraj</h3>
          <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" onClick={gotoDashboard}>Course list</a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link" onClick={gotoHome}>Home</a>
    </li>
  </ul>
        </div>
      )
    
    }
    else if(loggedInUser.email === adminEmail){
      return(
        <div className="headerAdmin">
          <h3 style={{textAlign:'center'}}>Learn Guitar with Dipraj</h3>
          <ul class="nav justify-content-center">
    <li class="nav-item  ">
      <a class="nav-link active" onClick={gotoDashboard}>Course list</a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link" onClick={gotoAddService}>Add Services</a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link" onClick={gotoMakeAdmin}>Make Admin</a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link" onClick={gotoManageService}>Manage Service</a>
    </li>
    <li class="nav-item  ">
      <a class="nav-link" onClick={gotoHome}>Home</a>
    </li>
  </ul>
        </div>
      )
    }
  }
}
if(adminEmail !==loggedInUser.email){
  return(
    <div className="headerAdmin">
    <h3 style={{textAlign:'center'}}>Learn Guitar with Dipraj</h3>
<ul class="nav justify-content-center">
<li class="nav-item">
<a class="nav-link active" onClick={gotoDashboard}>Course list</a>
</li>
<li class="nav-item  ">
<a class="nav-link" onClick={gotoHome}>Home</a>
</li>
</ul>
</div>
  )
}

    return (
        <div >
            
        </div>
    );
};

export default AdminHeader;