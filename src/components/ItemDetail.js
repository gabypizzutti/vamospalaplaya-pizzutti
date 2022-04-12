import ItemCount from "./ItemCount";
import {Card} from 'react-bootstrap';

const ItemDetail = ({item}) => {

    return (
            <>
            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Text>{item.id}</Card.Text>            
                <Card.Title id="title">{item.modelo}</Card.Title>
                <Card.Img variant="top" src={item.img} />
                <Card.Text className="price">{item.price}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ItemCount/>
            </Card>
            </>
        
    )
}

export default ItemDetail;