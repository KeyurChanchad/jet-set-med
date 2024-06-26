import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/services.css'; 
import globalSearch from '../assets/image/global-search.png';

const servicesForAll = [
  {
    title: "Discovery Call",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch  
  },
  {
    title: "Travel Safety Check",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Mental Health Check",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Pre-Travel Consult",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
];

const membersOnlyServices = [
  {
    title: "General Medicine",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Orthopaedic",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Gynaecology",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Psychiatry",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
  {
    title: "Physiotherapist",
    description: "Request a callback to understand the service and choose the right medical kit for your adventures.",
    icon: globalSearch
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div className="card h-100 text-center">
      <div className="service-card-body">
        <div className="service-card-icon">
          <img src={icon} className="service-card-icon" width={80} height={80} alt='global-search'/>
        </div>
        <h5 className="service-card-title">{title}</h5>
        <p className="service-card-text">{description}</p>
        <span  className='red-dot'></span>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Services for All</h2>
      <div className="row">
        {servicesForAll.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <h2 className="text-center my-4">For JetSetMed Members Only</h2>
      <div className="row">
        {membersOnlyServices.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
