import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [mallas, setMallas] = useState ([]);

    // useEffect(() => {
    //     async function mostrar (){
    //         let mostrarProductos = await getData();
    //         setMallas(mostrarProductos)
    //     }
    //     mostrar();
    // }, []);

    const onAdd = (productos) => {
         alert(`${productos} productos agregados a tu carrito`);
    }

    return (
        <>
            <p className="mensaje">{greeting}</p>
            <ItemList productos={mallas} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;