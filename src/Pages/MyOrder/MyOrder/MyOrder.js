import React from 'react';
import { Button} from 'react-bootstrap';
import './myOrder.css';


const MyOrder = ({order, handelDelete}) => {
    const {date, offerTitle,image, _id} = order;
    
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="card-img h-100" src={image} alt="orderImage" />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{offerTitle}</h5>
                        <h6>{date}</h6>
                        <Button onClick ={() => handelDelete(_id)} className="btn btn-primary">Delete Item</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;