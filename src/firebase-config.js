// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTRQeDXfBb_mPCMxM0LwYg76Ago6fls0",
  authDomain: "myblogapp-3f077.firebaseapp.com",
  projectId: "myblogapp-3f077",
  storageBucket: "myblogapp-3f077.appspot.com",
  messagingSenderId: "915015757632",
  appId: "1:915015757632:web:f6376356f222d2f251d4a5",
  measurementId: "G-SM21TYBJLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();