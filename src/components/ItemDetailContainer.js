import React, {useEffect, useState} from 'react';
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import {data} from '../utils/products';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = ()=> {
    const [dato, setDato] = useState ({});

    const { idItem } = useParams();

    // useEffect (() => {
    //     customFetch (2000, data[2])
    //     .then (result => setDato (result))
    //     .catch (error => console.log(error))
    // }, []);

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;