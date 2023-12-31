// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCP03v1LDjVOp5AkcPDSIK_dYZkWyBeugo",
  authDomain: "jobard-web.firebaseapp.com",
  projectId: "jobard-web",
  storageBucket: "jobard-web.appspot.com",
  messagingSenderId: "372507499159",
  appId: "1:372507499159:web:53a5b911ff81fd46c867d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
export {db};