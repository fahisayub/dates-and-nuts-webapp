import * as types from './actionTypes';
import {auth, db} from '../../utils/firebase-config'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore';


  
  

export const registerAdminApi=(payload)=>(dispatch)=>{
    dispatch({type:types.ADMIN_REGISTER_REQUEST});
    createUserWithEmailAndPassword(auth,payload.email,payload.password).then((res)=>{
        dispatch({type:types.ADMIN_REGISTER_SUCCESS,payload:res._tokenResponse.refreshToken });
        dispatch(setAdminProfileApi({email:payload.email,uid:res.user.uid}))
        console.log(res._tokenResponse.refreshToken);
    }).catch((err)=>{
        dispatch({type:types.ADMIN_REGISTER_FAILURE});
        console.log(err);
    })

    
}

export const loginAdminApi=(payload)=>(dispatch)=>{
    dispatch({type:types.ADMIN_LOGIN_REQUEST});
    signInWithEmailAndPassword(auth,payload.email,payload.password).then((res)=>{
        dispatch({type:types.ADMIN_LOGIN_SUCCESS,payload:res._tokenResponse.refreshToken});

        console.log(res._tokenResponse.refreshToken);
        
    }).catch((err)=>{
        dispatch({type:types.ADMIN_LOGIN_FAILURE});
        console.log(err);
    })
    //USED FOR PUSHING JSON DATA TO FIRESTORE
//     products.forEach( async(obj)=> {
//       let prod={
//           id: obj.id,
//           title: obj.title,
//           description: obj.description,
//           price: obj.price,
//           type: obj.type,
//           tags: obj.tags,
//           available: obj.available,
//           instockQty: obj.instock,
//           imageUrl:obj.product_image,
//           handle: obj.handle,
//           alt:null,
//         }
//         try{
//           await addDoc(collection(db,'products'),prod)

//         }catch(e){
// console.log(e);
//         }
     
//   });
}

export const signoutAdminApi=(payload)=>(dispatch)=>{
    dispatch({type:types.ADMIN_LOGOUT_REQUEST});
    signOut(auth).then((res)=>{
        dispatch({type:types.ADMIN_LOGOUT_SUCCESS});
        console.log(res);
    }).catch((err)=>{
        dispatch({type:types.ADMIN_LOGOUT_FAILURE});
        console.log(err);
    })
}

//SET ADMIN_PROFILE API
export const setAdminProfileApi=(userdata)=>async(dispatch)=>{
    dispatch({type:types.ADMIN_PROFILE_REQUEST});
    try{
      const  docref=doc(db,'admin',userdata.uid);
      await  setDoc(docref,userdata);
      dispatch({ type: types.ADMIN_PROFILE_SUCCESS });
      dispatch(getAdminProfileApi(userdata.uid));
    }catch(err){
      dispatch({ type: types.ADMIN_PROFILE_FAILURE});
    }
    
  }
   
  
  
  // GET ADMIN_PROFILE API
  export const getAdminProfileApi = (payload)=>async(dispatch) => {
    dispatch({ type: types.ADMIN_PROFILE_REQUEST });
    const docref=doc(db,'admin',payload);
    const docSnap = await getDoc(docref);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
     dispatch({ type: types.ADMIN_PROFILE_SUCCESS, payload: docSnap.data() });
  } else {
    // doc.data() will be undefined in this case
    dispatch({ type: types.ADMIN_PROFILE_FAILURE });
    console.log("No such document!");
  }
  
    
  };