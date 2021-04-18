import React from 'react';

const DeleteOne = (props) => {
    // console.log(props.dService);
    const {_id, data ,imageup} = props.dService;
    const handleDeleteCourse = (_id) =>{
        fetch(`https://evening-chamber-15530.herokuapp.com/delete/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
            // console.log(_id)
    }
    return (
        <div style={{margin:'10px',border:'1px solid gray',padding:'5px',borderRadius:'10px',boxShadow:'1px 1px 10px gray',justifyContent:'center',alignItems:'center'}} className="row">
           <div className="col-md-4">
           <h5><img style={{width:'55px'}} src={imageup} alt=""/></h5>
           </div>
           <div className="col-md-4">
           <h5>Name: {data.Pname}</h5>
           </div>
           <div className="col-md-4">
           <button onClick={() =>handleDeleteCourse(_id)} type="button" class="btn btn-outline-danger">Delete</button>
           </div>
            
        </div>
    );
};

export default DeleteOne;