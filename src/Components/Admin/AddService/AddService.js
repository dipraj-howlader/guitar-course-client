import React, { useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageup, setImageup] = useState('');

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set("key", "10805234287660b2f8004e7fd834d4a5");
        imageData.append("image", event.target.files[0]);
    
        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then((res) => {
            
            if(res.data.data.display_url !== ''){
                console.log(res.data.data.display_url);
                setImageup(res.data.data.display_url);

                    alert("Image Uploaded");

            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    const onSubmit = data => {
        const serviceInfo = {
            data,
            imageup
        }
        console.log(serviceInfo);
        
        fetch('http://localhost:5000/addService',{
          method:'POST',
           headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(serviceInfo)
        })
        .then(res => console.log('server side responsed') )

    };

    return (
        <div className=" pb-5">
            <div >
            <AdminHeader></AdminHeader>
            </div>
            <div className="addservice" >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Add Service</h3>
      <input placeholder="Service Name" defaultValue="" {...register("Pname")} />
      <br/>

      <input placeholder="Price" {...register("Pprice")}/>
      <br/>

      <input placeholder="Product Details" {...register("Pdetails")}/>
      <br/>

      <input type="file" name="" onChange={handleImageUpload}   />
      <br/>

      <button type="button submit" class="btn btn-outline-danger">Add Service</button>
    </form>
            </div>
        </div>
    );
};

export default AddService;