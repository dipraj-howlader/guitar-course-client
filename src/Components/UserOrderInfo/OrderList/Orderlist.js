import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import PaymentProcess from '../../PaymentProcess/PaymentProcess/PaymentProcess';
import './Orderlist.css';



const Orderlist = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  defaultValue={loggedInUser.name} {...register("name")} />
      <br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue={loggedInUser.email} {...register("email")} />
      <br/>

      <input  />
      <br/>
      <button type="submit"> PAY</button>
    </form>
        </div>
        <div>
          <PaymentProcess></PaymentProcess>
        </div>
        </div>

    );
};

export default Orderlist;