import React from 'react';
import './subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribe pt-5">
           <div className="d-flex flex-column align-items-center mt-5  pt-5">
                <h1 style={{color: "white"}}>TRAVEL FAR ENOUGH, YOU MEET YOURSELF</h1>
                <p style={{ color: "white", width: "50%", textAlign: 'center' }}>Travel photography differs from other subcategories of photography. It is a genre that has few limitations to its image qualifiers, but will also test the photographer to great lengths due to the abundance of challenges faced.</p>
                <button className="btn btn-primary px-5 btn-lg fw-bold">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;