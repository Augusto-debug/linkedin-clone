import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9OMnicLasvQySWgFPRVMq9ZKu0Eb0oTI",
  authDomain: "linkedin-clone-b4cdc.firebaseapp.com",
  projectId: "linkedin-clone-b4cdc",
  storageBucket: "linkedin-clone-b4cdc.appspot.com",
  messagingSenderId: "1019871653481",
  appId: "1:1019871653481:web:1c4506d19912c756c37cf8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
