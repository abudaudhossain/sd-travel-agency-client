import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TourType from '../TourType/TourType';
import './travelType.css'

const TravelTypes = () => {
    return (
        <div className="travelType py-5 ">
            <div className="d-flex flex-column align-items-center pt-3">
                <h1 style={{color: "white"}}>TOUR TYPE</h1>
                <p style={{ color: "white", width: "50%", textAlign: 'center' }}>A tour description is the marketing content that explains what your tour is and it's unique selling points.Here three tour types you choose any one</p>
            </div>
            <Container className="py-5">
                <Row>
                    <Col lg={4} md={6}>
                       <TourType image ="https://www.schengenvisainfo.com/news/wp-content/uploads/2021/05/paris-France-1.jpg" title="Travel to european countries"></TourType>
                    </Col>
                    <Col  lg={4} md={6}>
                       <TourType image ="https://cdn.britannica.com/36/178636-050-805D750A/mosque-sandstone-mausoleum-complex-Taj-Mahal-Uttar.jpg" title="Travel to neighboring countries"></TourType>
                    </Col>
                    <Col  lg={4} md={6}>
                       <TourType image ="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg" title="Travel to own country"></TourType>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TravelTypes;