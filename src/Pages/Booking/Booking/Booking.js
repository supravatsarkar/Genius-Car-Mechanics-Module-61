import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://dry-spire-84918.herokuapp.com/services/book/${serviceId}`;
        axios.get(url)
            .then(res => {
                console.log("Single service-", res.data);
                setService(res.data);
            })

    }, [])
    // console.log(useParams());
    return (
        <div>
            <h2>THis is booking {serviceId}</h2>
            <h3>Service Name: {service.name}</h3>
            <h4>Price: {service.price}</h4>
            <p>Price: {service.description}</p>
            <img src={service.img} alt="..." />
        </div>
    );
};

export default Booking;