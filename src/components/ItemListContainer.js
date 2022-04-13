import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemList from './ItemList';
import products from '../utils/products';

const ItemListContainer = ({greeting}) => {

     const [dato, setDatos] = useState ([]);
     const  {idCategory} = useParams (); 

    useEffect (() => {
        if(idCategory === undefined){
            customFetch (2000,products)
            .then (result => setDatos(result))
            .catch(error => console.log (error))
        }else {
            customFetch (2000, products.filter(item => item.categoryId === (idCategory)))
            .then (result => setDatos (result))
            .catch (error => console.log(error))
        }
    })


    return (
        <>
            <ItemList productos={dato} />
        </>
    );
}

export default ItemListContainer;