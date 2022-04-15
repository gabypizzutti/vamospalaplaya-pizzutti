import React from "react";
import Item from './Item';
import {Container, Row} from 'react-bootstrap';
import { SpinnerDiamond } from 'spinners-react';

export default function ItemList ({dato}) {
    return(
        <>
          <Container>
            <Row>
              {dato.length > 0 ? 
                dato.map((item) => 
                <Item key={item.id} id={item.id} modelo={item.modelo} img={item.img} />) : <p>Cargando modelos...<SpinnerDiamond size={76} thickness={157} speed={104} color="#2dcdd2" secondaryColor="rgba(57, 172, 150, 0.7)"/></p>
                }
            </Row>
          </Container>
        </>
    )
}


