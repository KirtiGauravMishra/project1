import React, { useEffect } from 'react';
import {Route, useNavigate, Navigate} from 'react-router-dom';
import LoginHomepage from '../Pages/LoginHomepage';
import Details from '../Pages/Details';


// const ProtectedRoute = (props) => {
    const ProtectedRoute = ({ isLoggedIn, children }) => {
         isLoggedIn =  localStorage.getItem('token');
         console.log (isLoggedIn);
         console.log(children);
         // initial state of islogged in is defined as "FALSE" in app.js
         // so, when we do (!isLoggedin -> that returns a token or makes the state true)
            if (!isLoggedIn) {
                  return <Navigate to="/home" replace />;
        }
            return children;
       };

export default ProtectedRoute;