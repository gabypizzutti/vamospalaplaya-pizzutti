import ItemCount from "./ItemCount";
import {Card} from 'react-bootstrap';
import Checkout from "./Checkout";
import { useState } from "react";

const ItemDetail = ({item}) => {

    const [itemCount, setCount] = useState (0);

    const onAdd = (productos) => {
        alert(`${productos} productos agregados a tu carrito`);
        setCount(productos);
   }

    return (
            <>
            <div className="modeloMalla">
                <img className="traje" src={item.img} alt="malla"/>
                <div className="datosProd">
                    <Card style={{ width: '16rem' }}>
                    <Card.Header className="idProducto">Código: {item.id}</Card.Header>
                        <Card.Body>
                        <Card.Title id="title">{item.modelo}</Card.Title>
                        <Card.Text className="descripcionProd">{item.description}</Card.Text>
                        <Card.Text className="price">{item.price}</Card.Text>
                        </Card.Body>
                    </Card>  
                    {
                    itemCount === 0 
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/> 
                    : <Checkout/>
                    }
                </div>
            </div>
            </>   
    )
}    

export default ItemDetail;