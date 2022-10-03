import { getSessionData, removeSessionData, setSessionData } from '../../utils/sessionStorage';
import * as types from './actionTypes';

const usertoken=getSessionData('usertoken');
const initState={
    isLoading:false,
    isError:false,
    token:usertoken||'',
    isUserAuth:usertoken?true:false,
  profileData: {},
  address:[],
}

export const userAuthReducer=(state=initState,{type,payload}) =>{

    switch (type){
            case types.USER_REGISTER_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.USER_REGISTER_SUCCESS:{
                setSessionData('usertoken',payload)

                return {...state,isLoading:false,isError:false,isUserAuth:true,token:payload}}
            case types.USER_REGISTER_FAILURE:{return {...state,isLoading:false,isError:true,}}
            case types.USER_LOGIN_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.USER_LOGIN_SUCCESS:{
                setSessionData('usertoken',payload)

                return {...state,isLoading:false,isError:false,isUserAuth:true,token:payload}}
            case types.USER_LOGIN_FAILURE:{return {...state,isLoading:false,isError:true,}}
            case types.USER_LOGOUT_REQUEST:{return {...state,isLoading:true,isError:false,}}
            case types.USER_LOGOUT_SUCCESS:{
                removeSessionData('usertoken',payload)

                return {...state,isLoading:false,isError:false,isUserAuth:false,token:''}}
            case types.USER_LOGOUT_FAILURE:{return {...state,isLoading:false,isError:true,}}

            case types.PROFILE_REQUEST: {
                return {
                  ...state,
                  isLoading: true,
                  isError: false,
                };
              }
              case types.PROFILE_SUCCESS: {
                return {
                  ...state,
                  isLoading: false,
                  isError: false,
                  profileData:{...payload},
                };
              }
              case types.PROFILE_FAILURE: {
                return {
                  ...state,
                  isLoading: false,
                  isError: true,
                 
                };
              }
case types.ADD_SHIPPING_ADDRESS_REQUEST   :{return{...state,isLoading:false,isError:false}}
case types.ADD_SHIPPING_ADDRESS_SUCCESS   :{return{...state,isLoading:false,isError:false}}
case types.ADD_SHIPPING_ADDRESS_FAILURE   :{return{...state,isLoading:false,isError:false}}

case types.GET_SHIPPING_ADDRESS_REQUEST   :{return{...state,isLoading:false,isError:false}}
case types.GET_SHIPPING_ADDRESS_SUCCESS   :{return{...state,isLoading:false,isError:false,address:payload}}
case types.GET_SHIPPING_ADDRESS_FAILURE   :{return{...state,isLoading:false,isError:false}}

case types.UPDATE_SHIPPING_ADDRESS_REQUEST   :{return{...state,isLoading:false,isError:false}}
case types.UPDATE_SHIPPING_ADDRESS_SUCCESS   :{return{...state,isLoading:false,isError:false}}
case types.UPDATE_SHIPPING_ADDRESS_FAILURE   :{return{...state,isLoading:false,isError:false}}

case types.DELETE_SHIPPING_ADDRESS_REQUEST:{return{...state,isLoading:false,isError:false}}
case types.DELETE_SHIPPING_ADDRESS_SUCCESS:{return{...state,isLoading:false,isError:false}}
case types.DELETE_SHIPPING_ADDRESS_FAILURE:{return{...state,isLoading:false,isError:false}}

        default :return state;
    }
}