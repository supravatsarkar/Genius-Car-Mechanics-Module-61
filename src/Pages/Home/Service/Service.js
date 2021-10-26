import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, description, name, time, price } = service;

    // console.log(service);
    return (
        <div className="service">
            <img src={img} alt=".." />
            <div className="p-3">
                <h2>{name}</h2>
                <h5>Price: {price}</h5>
                <h6>Time: {time}</h6>
                <p>{description}</p>
                <Link to={`/book/${_id}`}>
                    <button className="btn btn-warning">Book {name}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;