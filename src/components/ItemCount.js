import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

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
        <div className="btnCount text-center">
        <ButtonGroup className="contador" aria-label="Basic example">
            <Button id="operation" onClick={add}>+</Button>
            <span className="numberStock">{count}</span>
            <Button id="operation1" onClick={remove}>-</Button>
        </ButtonGroup>
        <Button id="cart" onClick={()=> onAdd(count)}>Add to cart</Button>
        </div>
    );
}

export default ItemCount;