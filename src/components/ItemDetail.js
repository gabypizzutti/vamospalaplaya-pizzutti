import ItemCount from "./ItemCount";
import {Card} from 'react-bootstrap';

const ItemDetail = ({item}) => {

    const onAdd = (productos) => {
        alert(`${productos} productos agregados a tu carrito`);
   }

    return (
            <>
            <div className="modeloMalla">
                <img className="traje" src={item.img} alt="malla"/>
                <div className="datosProd">
                <Card style={{ width: '16rem' }}>
                <Card.Header className="idProducto">{item.id}</Card.Header>
                    <Card.Body>
                    <Card.Title id="title">{item.modelo}</Card.Title>
                    <Card.Text className="descripcionProd">{item.description}</Card.Text>
                    <Card.Text className="price">{item.price}</Card.Text>
                    <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                    </Card.Body>
                </Card>  
                </div>
            </div>
            </>
        
    )
}

export default ItemDetail;