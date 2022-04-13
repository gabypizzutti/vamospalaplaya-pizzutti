import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemList from './ItemList';
const {data} = require ('../utils/products');

const ItemListContainer = ({}) => {

     const [dato, setDatos] = useState ([]);
     const {idCategory} = useParams (); 

    useEffect (() => {
        if(idCategory === undefined){
            customFetch (2000,data)
            .then (result => setDatos(result))
            .catch(error => console.log (error))
        }else {
            customFetch (2000, data.filter(item => item.categoryId === (idCategory)))
            .then (result => setDatos (result))
            .catch (error => console.log(error))
        }
    }, [idCategory]);


    return (
        <>
            <ItemList productos={dato} />
        </>
    );
}

export default ItemListContainer;