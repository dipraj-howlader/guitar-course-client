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



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
      name: '',
      email: '',
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
        <Route path="/order">
        <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route>

        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
