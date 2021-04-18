import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    // console.log(data)
    fetch('https://evening-chamber-15530.herokuapp.com/addAdmin',{
        method:'POST',
         headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res => alert("Admin added") )
  };
    return (
        <div className="">
            <div>
            <AdminHeader></AdminHeader>
            </div>
            <div className="makeAdmin">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Make Admin</h4>
      <input  placeholder="Type Email" defaultValue="" {...register("admin")} />
      <br/>
        
      <button type="button submit" class="btn btn-dark">Make Admin</button>

    </form>
            </div>
        </div>
    );
};

export default MakeAdmin;