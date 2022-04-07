import React from "react";
import {Card, Button } from 'react-bootstrap';
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

export default function Item ({id, modelo, img, price, description}) {
    return(
        <>
        <Card id="cards" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>{id}</Card.Text>            
            <Card.Title>{modelo}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}


