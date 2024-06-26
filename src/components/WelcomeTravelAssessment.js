import React from 'react';

const WelcomeTravelAssessment = ({ logoWhite, biFileMedical, title}) => {
  return (
    <>
      {logoWhite && <img src={logoWhite} alt="logo-white" className="logo-white" />}
        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
        {biFileMedical && <img src={biFileMedical} alt="logo-white" width={150} height={150}  />}
            <h2 className='travel-assessment-heading w-50'>{title}</h2>
        </div>
    </>
  )
}

export default WelcomeTravelAssessment
