import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div>

            <footer className="text-center text-lg-start">
                <div>
                    <section className="pt-5">
                        <div className="container text-center text-md-start">
                            <div className="row">

                                <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i><span className="title-logo">SD</span> Travel
                                    </h6>
                                    <p>
                                        There are two famous natural wonders in Bangladesh – the Sundarbans National Park, which is home to the largest mangrove forest in the world, and Cox’s Bazar, the longest uninterrupted natural sand beach in the world.
                                    </p>
                                </div>

                                <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Our Tour Type
                                    </h6>
                                    <p>
                                        <Link to="/service/2" className="text-reset">Travel to your own country</Link>
                                    </p>
                                    <p>
                                        <Link to="/service/5" className="text-reset">Travel to neighboring country</Link>
                                    </p>
                                    <p>
                                        <Link to="/service/6" className="text-reset">Travel to european country</Link>
                                    </p>
                                </div>

                                <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
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

                                <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Contact Us
                                    </h6>
                                    <p><i className="fas fa-home me-3"></i>SD Travel Agency, RK 10012, BD</p>
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

                </div>
                <div className="text-center p-4" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="/#">Abu Daud Hossain</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;