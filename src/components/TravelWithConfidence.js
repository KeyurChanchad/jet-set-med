import React from 'react';
import '../styles/TravelWithConfidence.css';
import clock from '../assets/image/deliverytime.png';
import nurse from '../assets/image/nurse.png';
import lowPrice from '../assets/image/lowprice.png';
import meter from '../assets/image/meter.png';
import meeting from '../assets/image/meeting.png';
import telemedicine from '../assets/image/telemedicine.png';

const TravelWithConfidence = () => {
  return (
    <div className="travelWithConDiv">
      <main className="main-content">
        <section className="intro">
          <h1 className='heading-1'>Travel with Confidence</h1>
          <p className='mb-4 heading-desc'>Be prepared for anything. JetSetMed equips you with 15 tele-consultations across 5 key specialties, all within your reach, wherever you roam.</p>
          <div className="features">
            <div className="feature">
              <img src={nurse} alt="nurse" />
              <h3>Expert medical advice</h3>
              <p>Connect with board-certified doctors in Family Medicine, Pediatrics, Mental Health, and more via tele-consultations.</p>
            </div>
            <div className="feature">
              <img src={lowPrice} alt="lowprice" />
              <h3>Cost-effective solutions</h3>
              <p>Our competitive plans offer affordable access to consultations, medication prescriptions, and more.</p>
            </div>
            <div className="feature">
              <img src={clock} alt="clock" />
              <h3>Time-saving convenience</h3>
              <p>Skip the wait time and get a diagnosis anytime. Our doctors are at your fingertips, 24/7.</p>
            </div>
          </div>
        </section>
        <section className="how-we-do-it">
          <h2 className='heading-1'>How we do it</h2>
          <p className='heading-desc'>If you really think about it, it's almost like we're your guardian angel</p>
          <div className="steps">
            <div className="step" id='step1'>
              <h3>Taking a Risk Assessment</h3>
              <p>Before your trip, you'll fill out a pre-trip risk assessment form on our user-friendly website dashboard.</p>
              <img src={meter} alt="meter" />
            </div>
            <div className="step" id='step2'>
              <h3>Pre-travel Consultation</h3>
              <p>Pre-trip consultation with healthcare professionals to identify potential risks and recommend medications. Kit and prescription delivered within 7 days for a seamless journey.</p>
              <img src={meeting} alt="meeting" />
            </div>
            <div className="step" id='step3'>
              <h3>Expert Advice from Doctors</h3>
              <p>When unwell, schedule an appointment with our doctors. Our doctors will reach out to you within 6 hours (depending on the time difference).</p>
              <img src={telemedicine} alt="telemedicine" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TravelWithConfidence;
