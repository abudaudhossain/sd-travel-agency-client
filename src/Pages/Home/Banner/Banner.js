import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import "./banner.css"
import bg_video from "./bg_video.mp4";


const Banner = () => {
    return (
        <div className="banner">
            <video autoPlay muted loop id="myVideo">
                <source src={bg_video} type="video/mp4"/>
            </video>
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