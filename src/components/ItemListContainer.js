import ItemCount from "./ItemCount";
import { getData } from "../data";
import { useEffect, useState } from "react";

const ItemListContainer = ({greeting}) => {

    const [mallas, setMallas] = useState ([]);

    useEffect(() => {
        function mostrar () {
            let verData = getData ()
            setMallas (verData)
        }
        mostrar();
    }, []);

    console.log(mallas, "info ok");

    const onAdd = (productos) => {
        alert(`${productos} productos agregados a tu carrito`);
    }

    return (
        <>
            <p className="mensaje">{greeting}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;