import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import NavvBarr from '../NavvBarr/NavvBarr';
import './login.css';
import loginImg from '../../../Images/login.jpg';
import google from '../../../Images/googlw.png';
import {  UserContext1 } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext1);

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    var token = credential.accessToken;

    var user = result.user;
    const {displayName , email }= user;

   const singInUser = {
    isSignedIn: true,
    name : displayName,
    email : email
   }
   
   setLoggedInUser(singInUser);
   history.replace(from);
   
  }).catch((error) => {


    var errorMessage = error.message;

 console.log(errorMessage);
  });
    }
    return (
        <div>
            <div style={{backgroundColor:'black',opacity: '0.8',paddingBottom:'90px'}}>
            <NavvBarr ></NavvBarr>
            </div>
            <div className="row login-container backgroundClr color">
                <div className="col-md-6  loginButton">
                    <h1>Log in with</h1>
                <button onClick={handleGoogleSignIn} type="button" class="btn btn-outline-success"><img style={{width:'25px'}} src={google} alt=""/> Google</button> 

                </div>
                <div className="col-md-6">
                <img class="img-fluid" src={loginImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;