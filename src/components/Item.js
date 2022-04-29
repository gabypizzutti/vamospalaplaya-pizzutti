import React from "react";
import {Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Item ({id, modelo, img}) {

    return(
        <>
        <Card className="cards" id="cardInicio" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text className="nroId">Código: {id}</Card.Text>            
            <Card.Title id="title">{modelo}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Link to={`/item/${id}`}><button className="botonProd">Detalles del producto</button> </Link>
            </Card.Body>
        </Card>
        </>
    )
}