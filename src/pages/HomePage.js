// src/App.js

import React from 'react';
import '../styles/homePage.css';
import doctorTeam1 from '../assets/image/doctor-team 1.png';
import logo from '../assets/image/logo.png';
import MedicalKitSection from '../components/MedicalKitSection';
import TravelWithConfidence from '../components/TravelWithConfidence';
import CarouselComponent from '../components/CarouselComponent';

function HomePage() {
  return (
    <div className="homepage">
      <header className="navbar">
        <img src={logo} className="logo" alt='logo' />
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Medical Kit</li>
            <li>Pricing</li>
          </ul>
        </nav>
      </header>
      <main className="row">
        <div className="text-content">
          <h1>Travel Anywhere, Fearlessly</h1>
          <p>Expert-curated medical kits & 24/7 tele-health for worry-free adventures.</p>
          <button>Explore Kits and Plans <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg></button>
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
    </div>
  );
}

export default HomePage;
