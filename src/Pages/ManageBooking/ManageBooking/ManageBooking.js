import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Booking from '../Booking/Booking';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [isChange, setIsChange] = useState(true)

    useEffect(() => {
        fetch('https://mighty-shore-75033.herokuapp.com/allBooking')
            .then((res) => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [isChange])

    const handelUpdateStatus = (id) => {
        fetch(`https://mighty-shore-75033.herokuapp.com/updateBooking/${id}`, {
            method: 'PUT'
        })
            .then((res) => res.json())
            .then(data => {
                setIsChange(!isChange);
            });
    }
    //delete Booking
    const handelDelete = (id) => {
        const isDelete = window.confirm("Are you sure delete this offer?");
        if (isDelete) {
            fetch(`https://mighty-shore-75033.herokuapp.com/deleteBooking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setIsChange(!isChange);
                })
            // console.log(id);
        }
    }

    // console.log(bookings)
    return (
        <Container>
            <h1>Manage Your Booking</h1>
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
                bookings.length ? bookings.map(booking => <Booking
                    key={booking._id}
                    booking={booking}
                    handelUpdateStatus={handelUpdateStatus}
                    handelDelete={handelDelete}
                ></Booking>) :
                    <Spinner animation="border" variant="primary" />
            }

        </Container>
    );
};

export default ManageBooking;