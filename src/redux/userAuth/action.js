import * as types from './actionTypes';
import {auth, db} from '../../utils/firebase-config'
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';

export const registerUserApi=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_REGISTER_REQUEST});
    createUserWithEmailAndPassword(auth,payload.email,payload.password).then((res)=>{
        dispatch({type:types.USER_REGISTER_SUCCESS,payload:res._tokenResponse.refreshToken });
        dispatch(setProfileApi({email:payload.email,uid:res.user.uid,username:payload.username}))
        console.log(res);
    }).catch((err)=>{
        dispatch({type:types.USER_REGISTER_FAILURE});
        console.log(err);
    })

    
}

export const loginUserApi=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    signInWithEmailAndPassword(auth,payload.email,payload.password).then((res)=>{
        dispatch({type:types.USER_LOGIN_SUCCESS,payload:res._tokenResponse.refreshToken        });
        dispatch(getProfileApi(res.user.uid));
        console.log(res);
    }).catch((err)=>{
        dispatch({type:types.USER_LOGIN_FAILURE});
        console.log(err);
    })
}

export const signoutUserApi=(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGOUT_REQUEST});
    signOut(auth).then((res)=>{
        dispatch({type:types.USER_LOGOUT_SUCCESS});
        console.log(res);
    }).catch((err)=>{
        dispatch({type:types.USER_LOGOUT_FAILURE});
        console.log(err);
    })
}

//SET PROFILE API
export const setProfileApi=(userdata)=>async(dispatch)=>{
    dispatch({type:types.PROFILE_REQUEST});
    try{
      const  docref=doc(db,'profile',userdata.uid);
      await  setDoc(docref,userdata);
      dispatch({ type: types.PROFILE_SUCCESS });
      dispatch(getProfileApi(userdata.uid));
    }catch(err){
      dispatch({ type: types.PROFILE_FAILURE});
    }
    
  }
   
  
  
  // GET PROFILE API
  export const getProfileApi = (payload)=>async(dispatch) => {
    dispatch({ type: types.PROFILE_REQUEST });
    const docref=doc(db,'profile',payload);
    const docSnap = await getDoc(docref);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
     dispatch({ type: types.PROFILE_SUCCESS, payload: docSnap.data() });
  } else {
    // doc.data() will be undefined in this case
    dispatch({ type: types.PROFILE_FAILURE });
    console.log("No such document!");
  }
  
    
  };

  //GET SHIPPING ADDRESS
  export const getShippingAddressApi=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_SHIPPING_ADDRESS_REQUEST});
    onAuthStateChanged(auth,async(user)=>{
        
        if(user!==null){
            const uid= user.uid;
            console.log(uid);

            await getDocs(collection(db,`profile/${uid}/shippingAddress`)).then((res)=>{
            let addresses = [];
      res.forEach((doc) => {
        const address=doc.data()
        address.addressid=doc.id;
        addresses.push(address);
      });
      console.log(addresses);
            dispatch({type:types.GET_SHIPPING_ADDRESS_SUCCESS,payload:addresses});
            console.log(res);
        }).catch((e)=>{
            dispatch({type:types.GET_SHIPPING_ADDRESS_FAILURE});
            console.log(e);
        })
    }else{
        console.log('not able to get uid')
    }
})
    
}

//SET SHIPPING_ADDRESS
export const addShippingAddressApi=(payload)=>async(dispatch)=>{
    dispatch({type:types.ADD_SHIPPING_ADDRESS_REQUEST});
    console.log(payload);
    onAuthStateChanged(auth,async(user)=>{

        
        if(user!==null){
            const uid=user.uid;
            payload.uid=uid;
       await addDoc(collection(db,`profile/${uid}/shippingAddress`),payload).then((res)=>{
            dispatch({type:types.ADD_SHIPPING_ADDRESS_SUCCESS})
            dispatch(getShippingAddressApi());
            console.log(res);
        }).catch((e)=>{
            dispatch({type:types.ADD_SHIPPING_ADDRESS_FAILURE});
        })
    }else{
        console.log('not able to get uid')
    }
})
}

//UPDATE SHIPPING_ADDRESS

export const updateShippingAddressApi=(payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_SHIPPING_ADDRESS_REQUEST});
    console.log(payload)
    onAuthStateChanged(auth,async(user)=>{

        if(user!==null){
            const uid=user.uid;
    
                await updateDoc(doc(db,`profile/${uid}/shippingAddress`,payload.addressid),payload).then((res)=>{
                    
          
                    dispatch({type:types.UPDATE_SHIPPING_ADDRESS_SUCCESS})
                    dispatch(getShippingAddressApi());
    
                    console.log(res);
            }).catch((e)=>{
                dispatch({type:types.UPDATE_SHIPPING_ADDRESS_FAILURE});
            })
    
        }else{
            console.log('not able to get uid')
        }
    });
    
}


//DELETE_SHIPPING_ADDRESS
export const deleteShippingAddressApi=(payload)=>(dispatch)=>{
    dispatch({type:types.DELETE_SHIPPING_ADDRESS_REQUEST});
    onAuthStateChanged(auth,async(user)=>{

    if(user!==null){
        const uid=user.uid;

            await deleteDoc(doc(db,`profile/${uid}/shippingAddress`,payload)).then((res)=>{
                
      
                dispatch({type:types.DELETE_SHIPPING_ADDRESS_SUCCESS})
                dispatch(getShippingAddressApi());

                console.log(res);
        }).catch((e)=>{
            dispatch({type:types.DELETE_SHIPPING_ADDRESS_FAILURE});
        })

    }else{
        console.log('not able to get uid')
    }
    });

    }
  