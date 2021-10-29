import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import "./banner.css"

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Col lg={5} md={7} className="banner-text">
                    <h1>SD TRAVEl</h1>
                    <h1>AGENCY</h1>
                    <p>A travel agency is a private retailer or public service that provides travel and tourism-related services to the general public</p>
                    <Button>Booking Now</Button>
                </Col>
            </Container>
        </div>
    );
};

export default Banner;