// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpjGCs4ISs15NlyVqOskcjS1mm2SaALlY",
  authDomain: "mimicucu-chat-app.firebaseapp.com",
  projectId: "mimicucu-chat-app",
  storageBucket: "mimicucu-chat-app.appspot.com",
  messagingSenderId: "6594383658",
  appId: "1:6594383658:web:da3b340371c51a28e21853",
  measurementId: "G-R2SRNNHSLN",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
//const analytics = getAnalytics(app);
