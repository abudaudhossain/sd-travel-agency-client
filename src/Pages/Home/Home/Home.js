import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import SearchContainer from '../SearchContainer/SearchContainer';
import Subscribe from '../Subscribe/Subscribe'
import TravelTypes from '../TravelTypes/TravelTypes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchContainer/>
            <TravelTypes></TravelTypes>
            <Offers></Offers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;