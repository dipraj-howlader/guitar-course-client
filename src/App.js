import React, { useState } from "react";
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Components/FirstUI/Home/Home";
import Login from "./Components/Shared/Login/Login";
import PlaceOrder from "./Components/UserOrderInfo/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/Shared/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin/Admin";
import Payment from "./Components/ProcessPayment/Payment/Payment";



export const UserContext = createContext();


function App() {
  const [userInfo,  setUserInfo] = useState({
   
  })
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
      name: '',
      email: '',
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserContext.Provider value = {[userInfo, setUserInfo]}>
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
        <PrivateRoute path="/order">
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/payment">
        <Payment></Payment>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
