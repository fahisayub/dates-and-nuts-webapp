import { onAuthStateChanged } from 'firebase/auth';
import {  collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase-config';
import * as types from './actionTypes'

export const getCartDataApi=(payload)=>(dispatch)=>{
    dispatch({type:types.FETCH_CARTDATA_REQUEST});
    onAuthStateChanged(auth,async(user)=>{
        
        if(user!==null){
            const uid= user.uid;
            console.log(uid);

            await getDocs(collection(db,`profile/${uid}/cart`)).then((res)=>{
            let products = [];
      res.forEach((doc) => {
        const prod=doc.data()
        
        products.push(prod);
      });
      console.log(products);
            dispatch({type:types.FETCH_CARTDATA_SUCCESS,payload:products});
            console.log(res);
        }).catch((e)=>{
            dispatch({type:types.FETCH_CARTDATA_FAILURE});
            console.log(e);
        })
    }else{
        console.log('not able to get uid')
    }
})
    
}


export const addToCartDataApi=(payload)=>async(dispatch)=>{
    dispatch({type:types.ADD_TO_CART_REQUEST});
    onAuthStateChanged(auth,async(user)=>{

        
        if(user!==null){
            const uid=user.uid;
            payload.uid=uid;
       await setDoc(doc(db,`profile/${uid}/cart`,payload.productid),payload).then((res)=>{
            dispatch({type:types.ADD_TO_CART_SUCCESS})
            dispatch(getCartDataApi());
            console.log(res);
        }).catch((e)=>{
            dispatch({type:types.ADD_TO_CART_FAILURE});
        })
    }else{
        console.log('not able to get uid')
    }
})
}

export const updateCartApi=(payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_CART_REQUEST});
    console.log(payload)
    onAuthStateChanged(auth,async(user)=>{

        if(user!==null){
            const uid=user.uid;
    
                await updateDoc(doc(db,`profile/${uid}/cart`,payload.productid),payload).then((res)=>{
                    
          
                    dispatch({type:types.UPDATE_CART_SUCCESS})
                    dispatch(getCartDataApi());
    
                    console.log(res);
            }).catch((e)=>{
                dispatch({type:types.UPDATE_CART_FAILURE});
            })
    
        }else{
            console.log('not able to get uid')
        }
    });
    
}

export const deleteCartDataApi=(payload)=>(dispatch)=>{
    dispatch({type:types.DELETE_FROM_CART_REQUEST});
    onAuthStateChanged(auth,async(user)=>{

    if(user!==null){
        const uid=user.uid;

            await deleteDoc(doc(db,`profile/${uid}/cart`,payload.productid)).then((res)=>{
                
      
                dispatch({type:types.DELETE_FROM_CART_SUCCESS})
                dispatch(getCartDataApi());

                console.log(res);
        }).catch((e)=>{
            dispatch({type:types.DELETE_FROM_CART_FAILURE});
        })

    }else{
        console.log('not able to get uid')
    }
    });

    }

    
