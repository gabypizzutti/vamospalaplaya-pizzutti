
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let baseDatos;
    if (idCategory) {
        baseDatos = query(collection(db, "products"), where('categoryId', '==', idCategory));
    } else {
        baseDatos = query(collection(db, "products"), orderBy('asc'));
    }
    const querySnapshot = await getDocs(baseDatos);
    const firestoreData = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return firestoreData;
}

export const firstFirestore = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No existe este dato!");
    }
}