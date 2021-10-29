import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/allBooking')
            .then((res) => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [isChange])

    const handelUpdateStatus = (id) =>{
        fetch(`http://localhost:5000/updateBooking/${id}`,{
            method: 'PUT'
        })
        .then((res) => res.json())
        .then(data =>{
            setIsChange(!isChange);
        });
        console.log(id);
    }
    console.log(bookings)
    return (
        <Container>
            <h1>this is manage Orders</h1>
            <Row className="bg-primary p-3">
                <Col>
                    <h4>User Name</h4>
                </Col>
                <Col>
                    <h4>User email</h4>
                </Col>
                <Col>
                    <h4>Tour Place Name</h4>
                </Col>
                <Col>
                    <h4>Status</h4>
                </Col>
                <Col>
                    <h4>Action</h4>
                </Col>
            </Row>
            {
                bookings.length ? bookings.map(booking => <Order
                    key={booking._id}
                    booking={booking}
                    handelUpdateStatus ={handelUpdateStatus}
                ></Order>) :
                    <Spinner animation="border" variant="primary" />
            }

        </Container>
    );
};

export default ManageOrders;