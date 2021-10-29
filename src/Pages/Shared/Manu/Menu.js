import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Menu = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/myOrders">My Booking</Nav.Link>
                        <Nav.Link as={Link} to="/manageBooking">Manage All Booking</Nav.Link>
                        <Nav.Link as={Link} to="/addOffer">Add A New Offer</Nav.Link>
                    </Nav>


                </Navbar.Collapse>
                <Navbar.Text>
                    {
                        user.email ?
                            <button onClick={logOut} className="btn mx-3" style={{ background: "#23CB77", color: "#fff" }}>Log Out</button>
                            :
                            <Link to="/login">
                                <button className="btn mx-3" style={{ background: "#23CB77", color: "#fff" }}>Login</button>
                            </Link>
                    }

                    Signed in as: <Link to="/login">{user.displayName}</Link>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Menu;