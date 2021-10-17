import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services-sec">
            <h1 className="text-primary mt-3">Our Services</h1>
            <div className="service-container">
                {
                    services.map((service, indx) => <Service
                        key={indx}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;