import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeh2A9eng9nTBed56iEPzaxXJjaqjPvuo",
  authDomain: "instagram-clone-react-344f8.firebaseapp.com",
  projectId: "instagram-clone-react-344f8",
  storageBucket: "instagram-clone-react-344f8.appspot.com",
  messagingSenderId: "295894893128",
  appId: "1:295894893128:web:7b462b47ed0c0d77ebce7d",
  measurementId: "G-6FQ9LM7QZ8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
