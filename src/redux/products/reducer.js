//import { getData, setData } from '../../utils/localStorage';
import * as types from './actionTypes';

const initState={
    isLoading:false,
    isError:false,
    data:[],
    currentProduct:{},
    featuredProducts:[],
}
export const productReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.PRODUCTS_FETCH_REQUEST:{return {...state,isLoading:true,isError:false}}
        case types.PRODUCTS_FETCH_SUCCESS:{  return {...state,isLoading:false,isError:false,data:payload}}
        case types.PRODUCTS_FETCH_FAILURE:{return {...state,isLoading:false,isError:true,}}
        
        case types.GET_FEATURED_PRODUCTS_REQUEST:{return {...state,isLoading:true,isError:false}}
        case types.GET_FEATURED_PRODUCTS_SUCCESS:{ 
            console.log(payload);

             return {...state,isLoading:false,isError:false,featuredProducts:payload}}
        case types.GET_FEATURED_PRODUCTS_FAILURE:{return {...state,isLoading:false,isError:true,}}

        case types.SINGLE_PRODUCT_FETCH_REQUEST:{return {...state,isLoading:true,isError:false}}
        case types.SINGLE_PRODUCT_FETCH_SUCCESS:{ return {...state,isLoading:false,isError:false,currentProduct:payload}}
        case types.SINGLE_PRODUCT_FETCH_FAILURE:{return {...state,isLoading:false,isError:true,}}

        case types.CREATE_PRODUCT_REQUEST:{return{...state,isLoading:false,isError:false}}
        case types.CREATE_PRODUCT_SUCCESS:{return{...state,isLoading:false,isError:false}}
        case types.CREATE_PRODUCT_FAILURE:{return{...state,isLoading:false,isError:false}}

        case types.UPDATE_PRODUCT_REQUEST:{return{...state,isLoading:false,isError:false}}
        case types.UPDATE_PRODUCT_SUCCESS:{return{...state,isLoading:false,isError:false}}
        case types.UPDATE_PRODUCT_FAILURE:{return{...state,isLoading:false,isError:false}}
        
        case types.DELETE_PRODUCT_REQUEST:{return{...state,isLoading:false,isError:false}}
        case types.DELETE_PRODUCT_SUCCESS:{return{...state,isLoading:false,isError:false}}
        case types.DELETE_PRODUCT_FAILURE:{return{...state,isLoading:false,isError:false}}

        
        default: return state;
    }
}