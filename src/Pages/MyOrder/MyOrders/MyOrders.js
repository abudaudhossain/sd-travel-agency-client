import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../../hooks/useAuth'
import axios from 'axios';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const {user} = useAuth();
    const userId = user.uid;
    const[isDelete, setIsDelete] = useState(true);
    
    

    useEffect(() =>{
        axios.post('http://localhost:5000/myOrder', {userId})
        .then(res => setMyOrder(res.data))
    },[isDelete])
    

    const handelDelete = (id) =>{
        const isDelete = window.confirm("Are you sure delete this offer?");
        if(isDelete){
            fetch(`http://localhost:5000/deleteBooking/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                setIsDelete(!isDelete);
            })
            console.log(id);
        }
    }
    return (
        <Container className="m-5">
            <Row>
                {
                    myOrder ? myOrder.map( order =><Col 
                        className = "my-3"
                        key={order._id}
                        md={6}>
                            <MyOrder order = {order} handelDelete ={handelDelete}></MyOrder>
                        </Col>) : <Spinner animation="border" variant="primary" />
                }
            </Row>

        </Container>
    );
};

export default MyOrders;