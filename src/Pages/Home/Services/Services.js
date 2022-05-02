import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data => setService(data));
    },[])

    return (
        <div id="services" className="container">
            <PageTitle title="Services"></PageTitle>
            <h1 className="text-primary text-center mt-5">Our Services</h1>
            <div className="services-container mt-5">
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;