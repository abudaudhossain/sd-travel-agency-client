import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = ({offer}) => {
    const {name,image, price, description, _id}=offer;
    return (
        <Card className="h-100 card">
            <Card.Img className="img-fouled h-100" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   {description.slice(0, 100)}
                </Card.Text>
                <div className="d-flex justify-content-between">
                <Card.Link as={Link} to={`/offerDetails/${_id}`}><Button variant="primary">Book Now</Button></Card.Link>
                <h4>${price}</h4>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Offer;