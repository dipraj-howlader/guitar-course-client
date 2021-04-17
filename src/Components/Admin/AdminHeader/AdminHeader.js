import React from 'react';
import { useHistory } from 'react-router';

const AdminHeader = () => {
 const history =  useHistory();
 const gotoHome =() => {
   history.push('/home')
 }
 const gotoAddService = () =>{
   history.push('/addService')
 }
    return (
        <div>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Order list</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={gotoAddService}>Add Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Make Admin</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Manage Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={gotoHome}>Home</a>
  </li>
</ul>
        </div>
    );
};

export default AdminHeader;