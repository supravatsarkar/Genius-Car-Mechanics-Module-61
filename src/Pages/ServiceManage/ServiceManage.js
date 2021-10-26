import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ServiceManage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                console.log(res.data);
                setServices(res.data);
            })
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        axios.delete(url, {})
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    alert('Successfully delete document');
                    const restServices = services.filter(service => service._id !== id);
                    setServices(restServices);
                }
            })
    }

    return (
        <div>
            <h2>Service Manage</h2>

            <div className="row row-cols-4">
                {
                    services.map(service => <div className="border border-danger col m-1 d-flex align-items-center flex-column"
                        key={service._id}
                    >
                        <h6>{service.name}</h6>
                        <p><small className="text-wrap text-break">id: {service._id}</small></p>
                        <img className="w-25 " src={service.img} alt="" />
                        <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceManage;