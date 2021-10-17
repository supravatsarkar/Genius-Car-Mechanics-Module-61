import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    // console.log(useParams());
    return (
        <div>
            <h2>THis is booking {serviceId}</h2>
        </div>
    );
};

export default Booking;