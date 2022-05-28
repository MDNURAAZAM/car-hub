// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7qjCl6u5cTDhhkFaEuMphXWx02UCLS0",
  authDomain: "car-parts-16140.firebaseapp.com",
  projectId: "car-parts-16140",
  storageBucket: "car-parts-16140.appspot.com",
  messagingSenderId: "861910208774",
  appId: "1:861910208774:web:5e6c1fceccf0729d660e87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
