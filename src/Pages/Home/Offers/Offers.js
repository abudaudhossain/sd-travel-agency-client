import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Offer from '../offer/Offer';


const Offers = () => {
    const [offers, setOffers] = useState([]);
   
    useEffect(() => {
        fetch('https://mighty-shore-75033.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        <div className="py-5">
            <div className="d-flex flex-column align-items-center pt-3">
                <h1 style={{ color: "#2c3046" }}>Our Offers</h1>
                <p style={{ width: "50%", textAlign: 'center' }}>Excellent domestic tours and international travel packages are available. SD Travel agency offers the best deals on Solo Tour Packages</p>
            </div>

            <Container className="py-5">
                <Row className="mb-5">
                    {
                        offers.map(offer => <Col
                            key={offer._id}
                            className="my-3"
                            lg={4}>
                            <Offer offer={offer}></Offer>
                        </Col>)
                    }

                </Row>

            </Container>

        </div>
    );
};

export default Offers;