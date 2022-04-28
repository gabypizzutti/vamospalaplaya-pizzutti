import { useEffect, useState } from "react";
/* import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch"; */
import ItemList from './ItemList';
/* import {firestoreFetch} from "../utils/firestoreFetch";
 */import { collection, doc, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const ItemListContainer = () => {

     const [dato, setDatos] = useState ([]);
/*      const {idCategory} = useParams (); 
 */
    /* useEffect (() => {
        if(idCategory === undefined){
            customFetch (2000,data)
            .then (result => setDatos(result))
            .catch(error => console.log (error))
        }else {
            customFetch (2000, data.filter(item => item.categoryId === parseInt(idCategory)))
            .then (result => setDatos (result))
            .catch (error => console.log(error))
        }
    }, [idCategory]);


    return (
        <>
            <ItemList dato={dato} />
        </>
    ); */

    useEffect(()=>{
        const firestoreFetch = async ()=> {
            const querySnapshot = await getDocs(collection(db, "products"));
            const firestoreData = querySnapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data()
            }));
            return firestoreData
        }
        firestoreFetch()
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    },[dato]);

  /*   useEffect (() => {
        firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
    }, [idCategory]); */

  /*   useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }) */


    return (
        <>
            <ItemList dato={dato} />
        </>
    );
}

export default ItemListContainer;