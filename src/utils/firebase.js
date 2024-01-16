// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsAELuK2TyFj374KSJK0ZZS9ANuD_AxMQ",
  authDomain: "netflixgpt-c7cc4.firebaseapp.com",
  projectId: "netflixgpt-c7cc4",
  storageBucket: "netflixgpt-c7cc4.appspot.com",
  messagingSenderId: "705088809492",
  appId: "1:705088809492:web:8f8dfa045d60baeddc9501",
  measurementId: "G-JD5QS99L72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
