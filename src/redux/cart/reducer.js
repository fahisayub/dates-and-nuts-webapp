import * as types from './actionTypes';

const initState={
    isLoading:false,isError:false,data:[]
}

export const cartReducer=(state=initState,{type,payload})=>{

switch(type){

    case types.FETCH_CARTDATA_REQUEST  :{return{...state,isLoading:true,isError:false}}
    case types.FETCH_CARTDATA_SUCCESS  :{return{...state,isLoading:false,isError:false,data:payload}}
    case types.FETCH_CARTDATA_FAILURE  :{return{...state,isLoading:false,isError:true}}

    case types.ADD_TO_CART_REQUEST     :{return{...state,isLoading:true,isError:false}}
    case types.ADD_TO_CART_SUCCESS     :{return{...state,isLoading:false,isError:false}}
    case types.ADD_TO_CART_FAILURE     :{return{...state,isLoading:false,isError:true}}

    case types.UPDATE_CART_REQUEST     :{return{...state,isLoading:true,isError:false}}
    case types.UPDATE_CART_SUCCESS     :{return{...state,isLoading:false,isError:false}}
    case types.UPDATE_CART_FAILURE     :{return{...state,isLoading:false,isError:true}}

    case types.DELETE_FROM_CART_REQUEST:{return{...state,isLoading:true,isError:false}}
    case types.DELETE_FROM_CART_SUCCESS:{return{...state,isLoading:false,isError:false}}
    case types.DELETE_FROM_CART_FAILURE:{return{...state,isLoading:false,isError:true}}


    default: return state;
}

}