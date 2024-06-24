// src/App.js

import React from 'react';
import '../styles/homePage.css';
import doctorTeam1 from '../assets/image/doctor-team 1.png';
import logo from '../assets/image/logo.png';
import MedicalKitSection from '../components/MedicalKitSection';
import TravelWithConfidence from '../components/TravelWithConfidence';
import CarouselComponent from '../components/CarouselComponent';
import HealthcareComparison from '../components/HealthcareComparison';
import PlanComparison from '../components/PlanComparison';
import Footer from '../components/Footer';
import { ArrowRight } from 'react-bootstrap-icons';

function HomePage() {
  return (
    <div className="homepage">
      <header className="nav-header">
        <img src={logo} className="logo" alt='logo' />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/edit-profile">EditProfile</a>
        </li>
      </ul>
    </div>
</nav>
      </header>
      <main className="home-main">
        <div className="text-content">
          <h1 className='heading-1'>Travel Anywhere, Fearlessly</h1>
          <p className='heading-desc'>Expert-curated medical kits & 24/7 tele-health for worry-free adventures.</p>
          <button>Explore Kits and Plans <ArrowRight className='mx-1'/> </button>
        </div>
        <div className="image-content">
          <img src={doctorTeam1} alt="Doctors" />
          <div className="telehealth-info">
            <ul>
              <li>Telehealth, Anytime: Doctors at your fingertips, 24/7.</li>
              <li>Telehealth, Anytime: Doctors at your fingertips, 24/7.</li>
            </ul>
          </div>
        </div>
      </main>
      <MedicalKitSection />
      <TravelWithConfidence />
      <CarouselComponent />
      <HealthcareComparison />
      <MedicalKitSection />
      <PlanComparison />
      <Footer />
    </div>
  );
}

export default HomePage;
