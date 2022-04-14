import React from "react";
import Item from './Item';
import {Container, Row} from 'react-bootstrap';   

export default function ItemList ({productos}) {
    return(
        <>
          <Container>
            <Row>
                { productos.length > 0 ? 
                productos.map((item) => 
                <Item key={item.id} id={item.id} modelo={item.modelo} img={item.img} />) : <p>Cargando modelos...</p>
                }
            </Row>
          </Container>
        </>
    )
}