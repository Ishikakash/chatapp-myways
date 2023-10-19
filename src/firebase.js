// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLtaP3EoAhYtI8cnNZKA4_17h05mIxyiw",
  authDomain: "react-chat-126d3.firebaseapp.com",
  projectId: "react-chat-126d3",
  storageBucket: "react-chat-126d3.appspot.com",
  messagingSenderId: "828031702518",
  appId: "1:828031702518:web:d4f94cb84f946ace5423d7",
  measurementId: "G-JHGZEDG5JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);