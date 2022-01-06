import React from 'react';
import { useParams } from 'react-router-dom';
import Offers from '../Home/Offers/Offers';

const SearchPackages = () => {
    const {location} = useParams();
    return (
        <div>
            <h1>Available packages in {location} </h1>
            <Offers />
        </div>
    );
};

export default SearchPackages;