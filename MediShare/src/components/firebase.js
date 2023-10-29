// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT1-aAvvUMK-W9NhniNZClcxpfzgQpzLs",
  authDomain: "medishare2.firebaseapp.com",
  databaseURL: "https://medishare2-default-rtdb.firebaseio.com",
  projectId: "medishare2",
  storageBucket: "medishare2.appspot.com",
  messagingSenderId: "729925343017",
  appId: "1:729925343017:web:23e0b040ea0a2bc0a1c938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();