import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import MyBooking from '../MyBooking/MyBooking';
import useAuth from '../../../hooks/useAuth'
import axios from 'axios';

const MyBookings = () => {
    const [isDelete, setIsDelete] = useState(true);
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const userId = user.uid;



    useEffect(() => {
        axios.post('https://mighty-shore-75033.herokuapp.com/myOrder', { userId })
            .then(res => setMyOrder(res.data))
    }, [isDelete])


    const handelDelete = (id) => {
        const isDelete = window.confirm("Are you sure delete this offer?");
        if (isDelete) {
            fetch(`https://mighty-shore-75033.herokuapp.com/deleteBooking/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    setIsDelete(!isDelete);
                })
            // console.log(id);
        }
    }
    return (
        <Container className="m-5">
            <Row>
                {
                    myOrder.length ? myOrder.map(order => <Col
                        className="my-3"
                        key={order._id}
                        md={6}>
                        <MyBooking order={order} handelDelete={handelDelete}></MyBooking>
                    </Col>) : <Spinner animation="border" variant="primary" />
                }
            </Row>

        </Container>
    );
};

export default MyBookings;