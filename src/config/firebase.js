// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEIYcxc94RvXPyNBZWIPi51fK228f9-jA",
    authDomain: "reset-54b37.firebaseapp.com",
    projectId: "reset-54b37",
    storageBucket: "reset-54b37.appspot.com",
    messagingSenderId: "976561487962",
    appId: "1:976561487962:web:bb993c0e08eedd662d5863"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);