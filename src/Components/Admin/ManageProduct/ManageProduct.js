import React, { useContext, useEffect, useState } from 'react';
import { UserContext3 } from '../../../App';
import AdminHeader from '../AdminHeader/AdminHeader';
import DeleteOne from '../DeleteOne/DeleteOne';

const ManageProduct = () => {
    const [manageThisService, setManageThisService] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setManageThisService(data))
    },[])
    return (
        <div>
            <div>
            <AdminHeader></AdminHeader>
            </div>
            <div>
                <h5 style={{paddingBottom:'15px',textAlign:'center',color:'forestgreen'}}>Click Delete button to delete course:</h5>
                {
                    manageThisService?.map(dService => <DeleteOne dService={dService} ></DeleteOne> )
                }
            </div>
        </div>
    );
};

export default ManageProduct;