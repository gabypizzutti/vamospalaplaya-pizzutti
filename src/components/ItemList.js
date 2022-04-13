import React from "react";
import Item from './Item';
import {Container, Row} from 'react-bootstrap';   

export default function ItemList ({productos}) {
    return(
        <>
          <Container>
            <Row>
                {productos.map(products) => 
                  <Item key={products.id} id={products.id} modelo={products.modelo} img={products.img} />                ))
                }
            </Row>
          </Container>
        </>
    )
}