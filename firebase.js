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
  apiKey: "AIzaSyAgWwUYgMQwssR-heXF7lUPXAETrkzaCTo",
  authDomain: "whatsapp-clone-79836.firebaseapp.com",
  projectId: "whatsapp-clone-79836",
  storageBucket: "whatsapp-clone-79836.appspot.com",
  messagingSenderId: "436769151047",
  appId: "1:436769151047:web:ef356c7c1e9766946ef962",
  measurementId: "G-8KTWCC3WZE",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
//const analytics = getAnalytics(app);
