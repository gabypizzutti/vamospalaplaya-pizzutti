import ItemCount from "./ItemCount";
import {Card} from 'react-bootstrap';
import Checkout from "./Checkout";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2'

const ItemDetail = ({item}) => {

    const [itemCount, setCount] = useState (0);

    const prod = useContext (CartContext);


    const onAdd = (productos) => {
        Swal.fire(`Has agregado ${productos} producto(s) a tu carrito`);
        setCount(productos);
        prod.addToCart (item,productos);
   }

    return (
            <>
            <div className="swimsuitModel">
                <img className="swimwear" src={item.img} alt="malla"/>
                <div className="dataProd">
                    <Card style={{ width: '16rem' }}>
                    <Card.Header className="idProducto">Código: {item.id}</Card.Header>
                        <Card.Body>
                        <Card.Title id="title">{item.modelo}</Card.Title>
                        <Card.Text /*className="descripcionProd"*/>{item.description}</Card.Text>
                        <Card.Text className="price"> AR$ {item.price}</Card.Text>
                        <Card.Text>Stock: {item.stock} unidades</Card.Text>
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