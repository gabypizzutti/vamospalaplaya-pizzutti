import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB57S2CZzuOb0bgxrEgE8n0VpqZZKoFAGQ",
  // authDomain: "ecom-vamospalaplaya.firebaseapp.com",
  // projectId: "ecom-vamospalaplaya",
  // storageBucket: "ecom-vamospalaplaya.appspot.com",
  // messagingSenderId: "225930865058",
  // appId: "1:225930865058:web:12759f53c3eaf5458c2afb",
  // measurementId: "G-SSWRSYH0DW"
  apiKey: "AIzaSyAaFPb-eG_1IPRVqabJ1SUjMNmcIleQ2H0",
  authDomain: "vamospalaplaya-373cf.firebaseapp.com",
  projectId: "vamospalaplaya-373cf",
  storageBucket: "vamospalaplaya-373cf.appspot.com",
  messagingSenderId: "472341586066",
  appId: "1:472341586066:web:84b26a159c64f0d5ab864b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;