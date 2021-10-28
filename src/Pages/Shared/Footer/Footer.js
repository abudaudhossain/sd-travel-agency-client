import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="text-center text-lg-start bg-dark  text-muted pt-5">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Dental Care
                                </h6>
                                <p>
                                    Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Our Servise
                                </h6>
                                <p>
                                    <Link to="/service/2" className="text-reset">IMPLANTS</Link>
                                </p>
                                <p>
                                    <Link to="/service/5" className="text-reset">CROWNS</Link>
                                </p>
                                <p>
                                    <Link to="/service/6" className="text-reset">INVISALIGN</Link>
                                </p>
                                <p>
                                    <Link to="/service/7" className="text-reset">VENEERS</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/home" className="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to="/services" className="text-reset">Service</Link>
                                </p>
                                <p>
                                    <Link to="/about" className="text-reset">About Us</Link>
                                </p>
                                <p>
                                    <Link to="/contact" className="text-reset">Contact</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact Us
                                </h6>
                                <p><i className="fas fa-home me-3"></i>Kurigram, RK 10012, BD</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 994 589 676</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                <section className="mb-4 text-center">
                    {/* <!-- Facebook --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    {/* <!-- Twitter --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                    {/* <!-- Github --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="/#">Abu Daud Hossain</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;