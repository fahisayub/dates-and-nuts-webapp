import * as types from './actionTypes';

const initState={
    isLoading: false,isError:false,allOrders:[],userOrders:[]
}
export const ordersReducer=(state=initState,{type,payload}) => {


    switch(type){
case types.ADD_TO_ORDERS_REQUEST   :{return {...state,isLoading:true,isError:false,}}
case types.ADD_TO_ORDERS_SUCCESS   :{return {...state,isLoading:false,isError:false,}}
case types.ADD_TO_ORDERS_FAILURE   :{return {...state,isLoading:false,isError:true,}}

case types.FETCH_ORDERS_REQUEST     :{return {...state,isLoading:true,isError:false,}}
case types.FETCH_ORDERS_SUCCESS     :{return {...state,isLoading:false,isError:false,allOrders:payload}}
case types.FETCH_ORDERS_FAILURE     :{return {...state,isLoading:false,isError:true,}}

case types.FETCH_USER_ORDERS_REQUEST     :{return {...state,isLoading:true,isError:false,}}
case types.FETCH_USER_ORDERS_SUCCESS     :{return {...state,isLoading:false,isError:false,userOrders:payload}}
case types.FETCH_USER_ORDERS_FAILURE     :{return {...state,isLoading:false,isError:true,}}

case types.UPDATE_ORDERS_REQUEST    :{return {...state,isLoading:true,isError:false,}}
case types.UPDATE_ORDERS_SUCCESS    :{return {...state,isLoading:false,isError:false,}}
case types.UPDATE_ORDERS_FAILURE    :{return {...state,isLoading:false,isError:true,}}

        default:return state;
    }
}