// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "dummy-api-key",
  authDomain: "ecomfirebase.firebaseapp.com",
  databaseURL: "https://ecomfirebase-default-rtdb.firebaseio.com",
  projectId: "ecomfirebase",
  storageBucket: "ecomfirebase.appspot.com",
  messagingSenderId: "dummyid",
  appId: "1:dummyid:web:dummyid",
  measurementId: "G-DUMMYID"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseapp);
export const auth=getAuth(firebaseapp);
export const db=getFirestore(firebaseapp);


