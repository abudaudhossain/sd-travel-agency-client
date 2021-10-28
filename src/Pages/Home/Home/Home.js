import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import TravelTypes from '../TravelTypes/TravelTypes';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TravelTypes></TravelTypes>
           <Offers></Offers>
        </div>
    );
};

export default Home;