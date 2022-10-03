import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase-config';
import { deleteCartDataApi } from '../cart/actions';
import * as types from './actionTypes';


export const addUserOrdersApi=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TO_ORDERS_REQUEST});
    const items=payload.items;
    const address=payload.address;
items.forEach(async(item)=>{
    item.orderStatus='placed';
    await addDoc(collection(db,'orders'),{...item,...address}).then((res)=>{
        console.log({...item,...address})
        dispatch({type:types.ADD_TO_ORDERS_SUCCESS});
        console.log(res.id);
        dispatch(deleteCartDataApi(item));
        dispatch(getUserOrdersApi());
    })
    .catch((err)=>{
        dispatch({type:types.ADD_TO_ORDERS_FAILURE});
        console.log(err);
    })
})

}

export const getAllOrdersApi=(payload)=>(dispatch)=>{
    dispatch({type:types.FETCH_ORDERS_REQUEST})
     getDocs(collection(db,`orders`)).then((res)=>{
        let orders = [];
  res.forEach((doc) => {
    const prod=doc.data()
    prod.orderid=doc.id;
    orders.push(prod);
  });
  console.log(orders);
        dispatch({type:types.FETCH_ORDERS_SUCCESS,payload:orders});
        console.log(res);
    }).catch((e)=>{
        dispatch({type:types.FETCH_ORDERS_FAILURE});
        console.log(e);
    })
}


export const getUserOrdersApi=(payload)=>(dispatch)=>{
    dispatch({type:types.FETCH_USER_ORDERS_REQUEST});
    onAuthStateChanged(auth,async(user)=>{

        if(user!==null){
            const uid=user.uid;
    let q =
      query(collection(db, "orders"), where("uid", "==", uid));
  getDocs(q)
    .then((res) => {
      let orders = [];
      res.forEach((doc) => {
        const prod={
            ...doc.data(),    orderid:doc.id,
        }
        orders.push(prod);
      });
      console.log(orders);

      dispatch({ type: types.FETCH_USER_ORDERS_SUCCESS, payload: orders });
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_USER_ORDERS_FAILURE });
      console.log("No such document!");
    });
        }else{
            console.log('not able to get uid');
        }
    });

}


export const updateOrderApi=(payload)=>(dispatch)=>{
dispatch({type:types.UPDATE_ORDERS_REQUEST});
    updateDoc(doc(db,'orders',payload.orderid),payload).then((res)=>{
        dispatch({type:types.UPDATE_ORDERS_SUCCESS});
        console.log(res);
        dispatch(getAllOrdersApi())
    }).catch((err)=>{
        dispatch({type:types.UPDATE_ORDERS_FAILURE});
    })
}


