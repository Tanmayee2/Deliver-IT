// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7PntyJJVBjO-Zf4rxoanF4_y4YUmEEH0",
  authDomain: "deliverease-ccc03.firebaseapp.com",
  projectId: "deliverease-ccc03",
  storageBucket: "deliverease-ccc03.appspot.com",
  messagingSenderId: "132444782556",
  appId: "1:132444782556:web:291b57ab2027cb515cd919",
  measurementId: "G-33Q7WKV75Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();


export{auth,provider,gitprovider};