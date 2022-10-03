import { getSessionData, removeSessionData, setSessionData } from '../../utils/sessionStorage';
import * as types from './actionTypes';


const admintoken= getSessionData('admintoken');
const initState={
    isLoading:false,isError:false,token:admintoken||'',isAdminAuth:admintoken?true:false,adminProfile:{}
}

export const adminAuthReducer=(state=initState,{type,payload}) =>{

    switch(type){

            
            case types.ADMIN_REGISTER_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.ADMIN_REGISTER_SUCCESS:{
                setSessionData('admintoken',payload)
                return {...state,isLoading:false,isError:false,isAdminAuth:true,token:payload}}
            case types.ADMIN_REGISTER_FAILURE:{return {...state,isLoading:false,isError:true,}}
            case types.ADMIN_LOGIN_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.ADMIN_LOGIN_SUCCESS:{
                setSessionData('admintoken',payload)

                return {...state,isLoading:false,isError:false,isAdminAuth:true,token:payload}}
            case types.ADMIN_LOGIN_FAILURE:{return {...state,isLoading:false,isError:true,}}
            case types.ADMIN_LOGOUT_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.ADMIN_LOGOUT_SUCCESS:{
                removeSessionData("admintoken")
                return {...state,isLoading:false,isError:false,isAdminAuth:false,token:''}}
            case types.ADMIN_LOGOUT_FAILURE:{return {...state,isLoading:false,isError:true,}}

case types.ADMIN_PROFILE_REQUEST :{return {...state,isLoading:false,isError:false}}
case types.ADMIN_PROFILE_SUCCESS :{return {...state,isLoading:false,isError:false,adminProfile:payload}}
case types.ADMIN_PROFILE_FAILURE :{return {...state,isLoading:false,isError:false}}


        default :return state;
    }
}