import React, { useEffect, useState } from 'react'
import "../styles/travelAssessment.css";
import logoWhite from '../assets/image/logo-white.png';
import biFileMedical from '../assets/image/bi_file-medical.png';
import WelcomeTravelAssessment from '../components/WelcomeTravelAssessment';
import { useNavigate } from 'react-router-dom';

const TravelAssessment = () => {
 const [welcome, setWelcome] = useState(true)
const navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => {
        setWelcome(false);
        navigate('/travel-assessment-aggreement')
      }, 5000);
  }, [])
  return (
    <div className='container-fluid travel-assessment-container'>
    {
        welcome &&
        <WelcomeTravelAssessment logoWhite={logoWhite} biFileMedical={biFileMedical} title="Welcome to our Travel Risk Assessment" />
    }
    </div>
  )
}

export default TravelAssessment;
