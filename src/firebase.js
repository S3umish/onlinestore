// Import the functions you need from the SDKs you need
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmiWtb0jl-dAWfN9iejN3yUmZxyGL0SFY",
  authDomain: "onlinestore-76dcf.firebaseapp.com",
  projectId: "onlinestore-76dcf",
  storageBucket: "onlinestore-76dcf.appspot.com",
  messagingSenderId: "562528283937",
  appId: "1:562528283937:web:4bc44d61bee0e306bf6260",
  measurementId: "G-1TGRS1JY7C"
});


const db = firebase.firestore()

export { db, firebaseApp}
