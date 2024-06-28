import React from "react";
import "../styles/TravelWithConfidence.css";
import meter from "../assets/image/meter.png";
import meeting from "../assets/image/meeting.png";
import telemedicine from "../assets/image/telemedicine.png";

const HowWeDoIt = () => {
  return (
    <div className="travelWithConDiv">
      <main className="main-content">
        <section className="how-we-do-it">
          <h2 className="heading-1">How we do it</h2>
          <p className="heading-desc">
            If you really think about it, it's almost like we're your guardian
            angel
          </p>
          <div className="steps row">
            <div className="step col-sm-12 col-md-3" id="step1">
              <h3>Taking a Risk Assessment</h3>
              <p>
                Before your trip, you'll fill out a pre-trip risk assessment
                form on our user-friendly website dashboard.
              </p>
              <img src={meter} alt="meter" />
            </div>
            <div className="step col-sm-12 col-md-3" id="step2">
              <h3>Pre-travel Consultation</h3>
              <p>
                Pre-trip consultation with healthcare professionals to identify
                potential risks and recommend medications. Kit and prescription
                delivered within 7 days for a seamless journey.
              </p>
              <img src={meeting} alt="meeting" />
            </div>
            <div className="step col-sm-12 col-md-3" id="step3">
              <h3>Expert Advice from Doctors</h3>
              <p>
                When unwell, schedule an appointment with our doctors. Our
                doctors will reach out to you within 6 hours (depending on the
                time difference).
              </p>
              <img src={telemedicine} alt="telemedicine" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowWeDoIt;
