import React from 'react'
import logoWhite from '../assets/image/logo-white.png';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const TravelAssessmentAggrement = () => {
  const navigate = useNavigate();
  const handleNextNavigate = ()=> {
    navigate('/travel-assessment', {
      state: {
        from: '/travel-assessment-aggrement'
      }
    });
  }
  return (
    <div className='container-fluid travel-assessment-container'>
      <img src={logoWhite} alt="logo-white" className="logo-white" />
      <div className=' w-50 m-auto mt-5'>
            <p className='aggrement-text'>
            Before you embark on your adventure, its essential to ensure yor health and well-being. This questionnaire is your first step towards a safe and enjoyable journey. During this assessment, you'll be asked a series of questions about the nature of your travel and your medical history. 
            </p>
            <p className='aggrement-text'>
            Don't worry, we're not powered by AI here! Your responses will be carefully reviewed by a real doctor who will provide personalised recommendations for your medical kit. 
            </p>
            <p className='aggrement-text'>
            This information will help us identify potential health risks associated with your destination and recommend preventive measures to keep you safe and healthy during your travels. Consider this a way to prepare for the future, by taking steps to minimise health risks in the present.
            </p>
            <p className='aggrement-text'>
            By answering these questions honestly and completely, you can ensure a smooth and enjoyable travel experience
            </p>
        </div>
        <div className='w-50 m-auto mt-3'>
          <button className='btn btn-primary primary-bg float-end w-25' onClick={handleNextNavigate}>Next <ArrowRight /> </button>
        </div>
    </div>
  )
}

export default TravelAssessmentAggrement
