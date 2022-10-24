import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../utils/firebase-config";
import * as types from "./actionTypes";

export const getProductApi = (params) => async (dispatch) => {
  console.log(params.type);
  dispatch({ type: types.PRODUCTS_FETCH_REQUEST });
  // axios.get(`http://localhost:8080/products`,params).then((res)=>{
  //     console.log(res.data)
  // dispatch({type:types.PRODUCTS_FETCH_SUCCESS,payload:querySnapshot});
  // }).catch((err)=>{
  // dispatch({type:types.PRODUCTS_FETCH_FAILURE});
  // })
  let q =
    params?.type?.length !== 0
      ? query(collection(db, "products"), where("type", "in", params.type))
      : query(collection(db, "products"));
 await getDocs(q)
    .then((res) => {
      let products = [];
      res.forEach((doc) => {
        const prod={
            ...doc.data(),docid:doc.id,
        }
        products.push(prod);
      });
      console.log(products);

      dispatch({ type: types.PRODUCTS_FETCH_SUCCESS, payload: products });
    })
    .catch((err) => {
      dispatch({ type: types.PRODUCTS_FETCH_FAILURE });
      console.log("No such document!");
    });
};
export const getFeaturedProductsApi=()=>async(dispatch)=>{
  
}

export const getCurrentProductApi=(payload)=>async(dispatch)=>{
    dispatch({type:types.SINGLE_PRODUCT_FETCH_REQUEST});
    const docRef = doc(db, "products", payload);
 await getDoc(docRef).then((res)=>{

     dispatch({ type: types.SINGLE_PRODUCT_FETCH_SUCCESS,payload:res.data()})
    // console.log("Document data:", res.data());
 }).catch((err)=>{
        console.log("No such document!");
        dispatch({ type: types.SINGLE_PRODUCT_FETCH_FAILURE });
    })


}

export const createProductApi=(payload)=>async(dispatch)=>{
  dispatch({type:types.CREATE_PRODUCT_REQUEST});
  
              await addDoc(collection(db,'products'),payload).then((res)=>{

                dispatch({type:types.CREATE_PRODUCT_SUCCESS});
                console.log(res);
              })
            .catch((err)=>{
              dispatch({type:types.CREATE_PRODUCT_FAILURE});
    console.log(err);
            })

}

export const updateProductApi=(payload)=>async(dispatch)=>{
 dispatch({type:types.UPDATE_PRODUCT_REQUEST});
 await updateDoc(doc(db,'products',payload.id),payload.form).then((res)=>{
    dispatch({type:types.UPDATE_PRODUCT_SUCCESS});
    dispatch(getProductApi({type:[]}))
    console.log(res);
  }).catch((err)=>{
    dispatch({type:types.UPDATE_PRODUCT_FAILURE});
    console.log(err.message);
  })

}

export const deleteProductApi=(payload)=>async(dispatch)=>{
  dispatch({type:types.DELETE_PRODUCT_REQUEST})
  await deleteDoc(doc(db,`prodcuts`,payload.productid)).then((res)=>{
                
      
    dispatch({type:types.DELETE_PRODUCT_SUCCESS})
    console.log(res);
}).catch((e)=>{
dispatch({type:types.DELETE_PRODUCT_FAILURE});
})
}