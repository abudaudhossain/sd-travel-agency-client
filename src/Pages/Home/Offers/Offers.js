import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TourType from '../TourType/TourType';

const Offers = () => {
    return (
        <div className="py-5">
            <div className="d-flex flex-column align-items-center pt-3">
                <h1 style={{color: "#2c3046"}}>Our Offers</h1>
                <p style={{width: "50%", textAlign: 'center' }}>Excellent domestic tours and international travel packages are available. SD Travel agency offers the best deals on Solo Tour Packages</p>
            </div>

            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                       <TourType image ="https://www.schengenvisainfo.com/news/wp-content/uploads/2021/05/paris-France-1.jpg" title="Travel to european countries"></TourType>
                    </Col>
                    <Col>
                       <TourType image ="https://cdn.britannica.com/36/178636-050-805D750A/mosque-sandstone-mausoleum-complex-Taj-Mahal-Uttar.jpg" title="Travel to neighboring countries"></TourType>
                    </Col>
                    <Col>
                       <TourType image ="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg" title="Travel to own country"></TourType>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <TourType image ="https://www.schengenvisainfo.com/news/wp-content/uploads/2021/05/paris-France-1.jpg" title="Travel to european countries"></TourType>
                    </Col>
                    <Col>
                       <TourType image ="https://cdn.britannica.com/36/178636-050-805D750A/mosque-sandstone-mausoleum-complex-Taj-Mahal-Uttar.jpg" title="Travel to neighboring countries"></TourType>
                    </Col>
                    <Col>
                       <TourType image ="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg" title="Travel to own country"></TourType>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Offers;