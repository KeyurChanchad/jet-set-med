import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/planComparision.css'

const PlanComparison = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 heading-1">Find Your Perfect Plan</h2>
      <p className="text-center mb-5 heading-desc">
        Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div id='c1'>
            <h5>Compare plans</h5>
            <p className="small-light">Explore our comparison to find the right kit that fits your needs.</p>
          </div>
          <ul className="list-unstyled">
            <li className="mb-2"><strong>Medical Kit</strong></li>
            <li className="small-light">"The Help Me Handbook" Your on-the-go guide with vital contact information, system recognition and actionalble remedies</li>
            <li>Telemedical Services</li>
            <li>Blood Test Recommendations</li>
            <li>High-quality products and services</li>
            <li>High-quality products and services</li>
            <li>Made for</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body price-card">
              <h5 className="card-title heading-3">JetSetMed Prime Kit</h5>
              <h6 className="heading-3">₹11,999</h6>
              <button className="btn btn-primary btn-block mb-3 bg-primary">Choose This Plan</button>
              <ul className="list-unstyled">
                <li>Premium 50+ OTC, presentation and trauman drugs</li>
                <li>All the features of the home kit and more.</li>
                <li>50% off Telemedical Consultation</li>
                <li>All the features of the home kit and more.</li>
                <li>24/7 Consultation via Chat</li>
                <li>High-quality products and services</li>
                <li>Made for businesses</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body price-card">
              <h5 className="card-title heading-3">JetSetMed Home Kit</h5>
              <h6 className="heading-3">₹2,999</h6>
              <button className="btn btn-outline-primary btn-block mb-3 bg-outline">Choose This Plan</button>
              <ul className="list-unstyled">
                <li>Basic Kit Only Over the container drugs and Trauma Kit </li>
                <li>Simple and Essential</li>
                <li>50% off Telemedical Consultation</li>
                <li>All the features of the home kit and more.</li>
                <li>24/7 Consultation via Chat</li>
                <li>High-quality products and services</li>
                <li>Made for households</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
