// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBvirEkkB9kZBUnnnojb8ri9c_50XOnWaA",
  authDomain: "e-commerce-a1a3a.firebaseapp.com",
  projectId: "e-commerce-a1a3a",
  storageBucket: "e-commerce-a1a3a.appspot.com",
  messagingSenderId: "206811713699",
  appId: "1:206811713699:web:6689624a64e301cfaa2f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firedb = getFirestore(app);
const auth = getAuth(app);

export {firedb, auth}