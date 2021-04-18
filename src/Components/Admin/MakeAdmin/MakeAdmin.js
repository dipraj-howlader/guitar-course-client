import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    // console.log(data)
    fetch('http://localhost:5000/addAdmin',{
        method:'POST',
         headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(res => alert("Admin added") )
  };
    return (
        <div>
            <div>
            <AdminHeader></AdminHeader>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" {...register("admin")} />
      <br/>
        
      <button  type="button submit" class="btn btn-dark">Make Admin</button>

    </form>
            </div>
        </div>
    );
};

export default MakeAdmin;