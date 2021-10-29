import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/addOffer', data)
        .then(res => {
            if(res.data._id){
                alert("Offer adding success");
                reset();
            }
        })

        };

    return (
        <Container>
            <Row>
                <h1>Please A New Add Offer</h1>
                <Col>
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center col-lg-8 ">
                        <input className="p-2 my-2" {...register("name",{ required: true } )} placeholder="Enter offer name"/>

                        <input className="p-2 my-2" type="number" {...register("price", { required: true })} placeholder="Price" />
                        <textarea className="p-2 my-2"  {...register("description", { required: true })} placeholder="Description" />
                        <input className="p-2 my-2" {...register("image", { required: true })} placeholder="Image url"/>
                       

                        <button type="submit" className="btn btn-primary my-2" >Add Offer</button>
                    </form>
                </Col>
            </Row>


        </Container>
    );
};

export default AddService;