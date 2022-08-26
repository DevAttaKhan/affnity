import React from 'react';
import {Navigate, useOutlet} from 'react-router-dom';
import { useSelector } from "react-redux";



const ProtectedRoute = ({children}) => {
  const Outlet = useOutlet();
    const login = useSelector(state => state.authReducer.loggedIn)
    console.log(login)
    if (!login) {
      return <Navigate to="/" replace />;
    }
  
    return(
      <>
      
      {children}
      {Outlet}
      </>
      ) 
      
  };


  export default ProtectedRoute;