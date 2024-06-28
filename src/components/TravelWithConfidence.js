import React from 'react';
import '../styles/TravelWithConfidence.css';
import clock from '../assets/image/deliverytime.png';
import nurse from '../assets/image/nurse.png';
import lowPrice from '../assets/image/lowprice.png';


const TravelWithConfidence = () => {
  return (
    <div className="travelWithConDiv">
      <main className="main-content">
        <section className="intro">
          <h1 className='heading-1'>Travel with Confidence</h1>
          <p className='mb-4 heading-desc'>Be prepared for anything. JetSetMed equips you with 15 tele-consultations across 5 key specialties, all within your reach, wherever you roam.</p>
          <div className="features row">
            <div className="feature col-sm-12 col-md-4">
              <img src={nurse} alt="nurse" />
              <h3>Expert medical advice</h3>
              <p>Connect with board-certified doctors in Family Medicine, Pediatrics, Mental Health, and more via tele-consultations.</p>
            </div>
            <div className="feature col-sm-12 col-md-4">
              <img src={lowPrice} alt="lowprice" />
              <h3>Cost-effective solutions</h3>
              <p>Our competitive plans offer affordable access to consultations, medication prescriptions, and more.</p>
            </div>
            <div className="feature col-sm-12 col-md-4">
              <img src={clock} alt="clock" />
              <h3>Time-saving convenience</h3>
              <p>Skip the wait time and get a diagnosis anytime. Our doctors are at your fingertips, 24/7.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TravelWithConfidence;
