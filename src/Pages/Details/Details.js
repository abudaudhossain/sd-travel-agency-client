import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useHistory, useParams } from 'react-router';

const Details = () => {
    const [offer, setOffer] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const { id } = useParams();

    // console.log(user)
    const onSubmit = data => {
        data.username = user.displayName;
        data.userId = user.uid;
        data.userEmail = user.email;
        data.offerTitle = offer.name;
        data.image = offer.image;
        data.status = "pending";

        axios.post("https://mighty-shore-75033.herokuapp.com/booking", data)
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Your Booking is Success");
                    reset();
                    history.replace("/myOrders");

                }
            })
        // console.log(data)
    };


    useEffect(() => {
        axios.get(`https://mighty-shore-75033.herokuapp.com/offer/${id}`)
            .then(data => {
                setOffer(data.data)
            })
    }, []);
    return (
        <div>
            <Container className="my-5 mx-auto">
                <div>
                    {
                        offer.name ? <div className="d-flex flex-column justify-content-center">

                            <img className="img-fouled" src={offer.image} alt="OfferImage" />
                            <div>
                                <h2>{offer.name}</h2>
                                <div>
                                    <p>{offer.description}</p>
                                    <h4>Total Travel Price : ${offer.price}</h4>
                                </div>

                            </div>
                        </div> : <Spinner animation="border" variant="success" />

                    }

                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center col-lg-8 ">
                        <label>Address</label>
                        <input className="mt-3 p-2" {...register("address", { required: true })} placeholder="Address" />
                        <label>Travel Date:</label>
                        <input className='my-3 p-2' {...register("date", { required: true })} type="date" />
                        <button className="btn btn-primary" type="submit">Booking Now</button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Details;