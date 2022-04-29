import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
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