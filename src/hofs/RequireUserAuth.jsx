import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireUserAuth = ({children}) => {
    const {isUserAuth}=useSelector(state=>state.userAuthReducer);
    const location=useLocation();
   if(!isUserAuth){
       return <Navigate to='/userlogin'state={{from:location.pathname}} replace/>
    }else{
       return children;
   }
};

export default RequireUserAuth;