import React from "react";
import {Card } from 'react-bootstrap';


export default function Item ({id, modelo, img, price, description}) {
    return(
        <>
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>{id}</Card.Text>            
            <Card.Title id="title">{modelo}</Card.Title>
            <Card.Img variant="top" src={img} />
            <Card.Text className="price">{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}


