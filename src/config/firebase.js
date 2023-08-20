// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGbPPHrf5krmzS50xmZGG3G7VYL4e6EVI",
  authDomain: "website-34ea2.firebaseapp.com",
  projectId: "website-34ea2",
  storageBucket: "website-34ea2.appspot.com",
  messagingSenderId: "518542030726",
  appId: "1:518542030726:web:3d28240b6f236c9d215e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
