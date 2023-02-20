import { getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvVpKNUSSnaivE6AmueFp27dpTycvmnbU",
  authDomain: "moneypennygpt.firebaseapp.com",
  projectId: "moneypennygpt",
  storageBucket: "moneypennygpt.appspot.com",
  messagingSenderId: "470622707060",
  appId: "1:470622707060:web:4e366ed6d9fa2bea1ea021",
  measurementId: "G-E9M42R74Y1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
