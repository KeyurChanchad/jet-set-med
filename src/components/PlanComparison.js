import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/planComparision.css'
import yesIcon from '../assets/image/yes.png';

const PlanComparison = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center heading-1">Find Your Perfect Plan</h2>
      <p className="text-center w-75 m-auto heading-desc">
        Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div id='c1'>
            <h5>Compare plans</h5>
            <p className="small-light">Explore our comparison to find the right kit that fits your needs.</p>
          </div>
          <ul className="list-unstyled">
            <li><strong>Medical Kit</strong></li>
            <li><p className='p-0 m-0'>"The Help Me Handbook"</p> <small>Your on-the-go guide with vital contact information, system recognition and actionalble remedies</small></li>
            <li>Telemedical Services</li>
            <li>Blood Test Recommendations</li>
            <li>High-quality products and services</li>
            <li>High-quality products and services</li>
            <li>Ideal for</li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body price-card">
              <h5 className="card-title heading-3">JetSetMed Prime Kit</h5>
              <h6 className="heading-3">₹11,999</h6>
              <button className="btn btn-primary btn-block mb-3 fill">Choose This Plan</button>
              <ul className="list-unstyled">
                <li>Premium 50+ OTC, presentation and trauman drugs</li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li>
                  <p>15 Complimentary Consultations</p>
                  <small>Includes doctors of 5 different specialisations</small>
                </li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li>Frequent travelers, families with children, individuals with specific health needs.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body price-card">
              <h5 className="card-title heading-3">JetSetMed Home Kit</h5>
              <h6 className="heading-3">₹2,999</h6>
              <button className="btn btn-outline-primary btn-block mb-3 outline">Choose This Plan</button>
              <ul className="list-unstyled">
                <li><p>Basic</p> <small>Kit Only Over the container drugs and Trauma Kit </small></li>
                <li></li>
                <li></li>
                <li></li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li><img src={yesIcon} alt='yesicon' /></li>
                <li>Short trips, budget-conscious travelers, those focused on basic first-aid needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
