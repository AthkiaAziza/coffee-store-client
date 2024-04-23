// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0lS37qn8QsCFeQYpjbLMmFfrac1rPl54",
  authDomain: "coffee-store-de84b.firebaseapp.com",
  projectId: "coffee-store-de84b",
  storageBucket: "coffee-store-de84b.appspot.com",
  messagingSenderId: "669419361992",
  appId: "1:669419361992:web:a610322c66a90774b677fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;