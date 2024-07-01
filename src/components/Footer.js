import React from 'react';
import '../styles/footer.css';
import youtubeIcon from '../assets/image/youtube.png';
import linkedinIcon from '../assets/image/linkedin.png';
import facebookIcon from '../assets/image/facebook.png';
import twitterIcon from '../assets/image/twitter.png';
import travelAbroad from '../assets/image/travel-abroad.png';

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="content">
        <div className='footer-div'>
            <h1 className='footer-heading'>JetSetMed Where health meets adventure! </h1>
            <button className='btn-orange'>Join our community today</button>
        </div>
            <div className="footer-image-container">
                <img src={travelAbroad} alt="JetSetMed graphics" className="graphic" />
            </div>
        </div>
      <footer className='container-fluid'>
        <hr className='hr-line'/>
        <p className='copy-right'>© 2024 JETSETMED. ALL RIGHTS RESERVED.</p>
        <div className="social-media">
          <a href="https://youtube.com"><img src={youtubeIcon} alt="YouTube" /></a>
          <a href="https://twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="https://linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
