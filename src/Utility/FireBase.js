// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // my config

// const firebaseConfig = {
//   apiKey: "AIzaSyCpol58un7vAk7GML_ujmVW7QH6vmFwUb4",
//   authDomain: "clone-c7d17.firebaseapp.com",
//   projectId: "clone-c7d17",
//   storageBucket: "clone-c7d17.appspot.com",
//   messagingSenderId: "979055823680",
//   appId: "1:979055823680:web:efd589a4241ecb8b2408a5",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore
// const db = getFirestore(app);

// // Initialize Authentication
// const auth = getAuth(app);

// export { db, auth };

// import firebase from "firebase/compat/app";
// //auth
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCpol58un7vAk7GML_ujmVW7QH6vmFwUb4",
//   authDomain: "clone-c3fb6.firebaseapp.com",
//   projectId: "clone-c3fb6",
//   storageBucket: "clone-c3fb6.appspot.com",
//   messagingSenderId: "307114346676",
//   appId: "1:307114346676:web:900a1b84ca4f3471ecafe1",
// };
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

import firebase from "firebase/compat/app";
// usedfor authentication

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpol58un7vAk7GML_ujmVW7QH6vmFwUb4",
  authDomain: "clone-c7d17.firebaseapp.com",
  projectId: "clone-c7d17",
  storageBucket: "clone-c7d17.appspot.com",
  messagingSenderId: "979055823680",
  appId: "1:979055823680:web:efd589a4241ecb8b2408a5",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
