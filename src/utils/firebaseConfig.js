// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57S2CZzuOb0bgxrEgE8n0VpqZZKoFAGQ",
  authDomain: "ecom-vamospalaplaya.firebaseapp.com",
  projectId: "ecom-vamospalaplaya",
  storageBucket: "ecom-vamospalaplaya.appspot.com",
  messagingSenderId: "225930865058",
  appId: "1:225930865058:web:12759f53c3eaf5458c2afb",
  measurementId: "G-SSWRSYH0DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;