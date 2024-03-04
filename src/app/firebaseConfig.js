import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbqsDa4CSi8X9VPNl3Ddre4SGiu5TqiQ",
  authDomain: "recipe-management-9c8ca.firebaseapp.com",
  projectId: "recipe-management-9c8ca",
  storageBucket: "recipe-management-9c8ca.appspot.com",
  messagingSenderId: "427124655218",
  appId: "1:427124655218:web:2d633ba05c15c7ec912eeb",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { db };
