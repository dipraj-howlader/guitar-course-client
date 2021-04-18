import React, { useEffect, useState } from "react";
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './App.css';
import Home from "./Components/FirstUI/Home/Home";
import Login from "./Components/Shared/Login/Login";
import PlaceOrder from "./Components/UserOrderInfo/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin/Admin";
import Payment from "./Components/ProcessPayment/Payment/Payment";
import AddService from "./Components/Admin/AddService/AddService";
import ReviewForm from "./Components/CustomerReview/ReviewForm";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";



export const UserContext1 = createContext();
export const UserContext2 = createContext();
export const UserContext3 = createContext();


function App() {
  const [courseService, setCourseService] = useState({

  })
  const [userInfo,  setUserInfo] = useState({
   
  })
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
      name: '',
      email: '',
  })
  return (
    <UserContext1.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserContext2.Provider value = {[userInfo, setUserInfo]}>
      <UserContext3.Provider value = {[courseService, setCourseService]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/order/:id">
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/dashboard">
          <Admin></Admin>
        </Route>
        <Route path="/payment">
        <Payment></Payment>
        </Route>
        <Route path="/addService">
        <AddService></AddService>
        </Route>
        <Route path="/customer/review">
        <ReviewForm></ReviewForm>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
    </Router>
    </UserContext3.Provider>
    </UserContext2.Provider>
    </UserContext1.Provider>
  );
}

export default App;
