import React from "react";
import {Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function Item ({id, modelo, img}) {
    return(
        <>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>{id}</Card.Text>            
            <Card.Title id="title">{modelo}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Link to={`/producto/${id}`}><button className="btn-primary">Detalles del producto</button> </Link>
            </Card.Body>
        </Card>
        </>
    )
}


