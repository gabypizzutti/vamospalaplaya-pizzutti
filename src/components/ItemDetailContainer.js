import React, {useEffect, useState} from 'react';
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import {data} from '../utils/products';


const ItemDetailContainer = ()=> {
    const [dato, setDato] = useState ({});

    useEffect (() => {
         customFetch (2000, data[2])
         .then (result => setDato (result))
         .catch (error => console.log(error))
    }, []);

   

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;