import React from 'react';
import { Card } from 'react-bootstrap';

const TourType = ({ image, title }) => {
    return (
        <Card className="h-100 card">
            <Card.Img className="img-fouled h-100" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default TourType;