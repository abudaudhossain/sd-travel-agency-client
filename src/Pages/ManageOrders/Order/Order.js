import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Order = ({booking, handelUpdateStatus, handelDelete}) => {
    const {status,username,userEmail,offerTitle, _id} = booking;
    return (
        <Row className="my-3">
        <Col>
            <h5>{username}</h5>
        </Col>
        <Col>
            <p>{userEmail}</p>
        </Col>
        <Col>
            <h6>{offerTitle}</h6>
        </Col>
        <Col>
            <h6>{status}</h6>
           
        </Col>
        <Col>           
                <button onClick = {() => handelUpdateStatus(_id)} className="btn btn-success">Active Now</button>
                <button onClick = {() => handelDelete(_id)} className="btn btn-danger mx-2">Delete</button>           
        </Col>
    </Row>
    );
};

export default Order;