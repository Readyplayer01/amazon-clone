// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAHz384RdwjBcZ4IXn9XOIXPYmChvQzB_0",
  authDomain: "clone-fd35e.firebaseapp.com",
  projectId: "clone-fd35e",
  storageBucket: "clone-fd35e.appspot.com",
  messagingSenderId: "302195660058",
  appId: "1:302195660058:web:28a9e17acd66bcfb26c8a3",
  measurementId: "G-P6F3TFH9WW",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};