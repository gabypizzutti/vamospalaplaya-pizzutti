import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (0);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const remove = () => {
        if (count > initial){
            setCount(count -1);
        }
    }

    const add = () => {
        if (count < stock){
            setCount(count + 1);
        }
    }

    return(
        <Card.Text>
        <ButtonGroup className='contador' aria-label="Basic example">
            <Button id="operacion" onClick={add}>+</Button>
            <span className="numberStock">{count}</span>
            <Button id="operacion" onClick={remove}>-</Button>
        </ButtonGroup>
        <Button id="cart" onClick={()=> onAdd(count)}>Add to cart</Button>
        </Card.Text>
    );
}

export default ItemCount;