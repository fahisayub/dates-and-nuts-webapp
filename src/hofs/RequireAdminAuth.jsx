import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation} from 'react-router-dom';
const RequireAdminAuth = ({children}) => {
    const  {isAdminAuth}=useSelector(state=>state.adminAuthReducer);
    const location =useLocation();
    if(!isAdminAuth){
        return <Navigate to='/adminlogin' state={{from:location.pathname}} replace/>
    }else{
        return children
    }
};

export default RequireAdminAuth;