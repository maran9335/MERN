// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3AFOM5j0v9FQh5A0RRbc9CU5r-av2pew",
  authDomain: "mern-book-inventory-bd31d.firebaseapp.com",
  projectId: "mern-book-inventory-bd31d",
  storageBucket: "mern-book-inventory-bd31d.appspot.com",
  messagingSenderId: "938475948635",
  appId: "1:938475948635:web:b5e53790284dc0ea494d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;