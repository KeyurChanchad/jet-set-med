import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-primary header-container">
    <div className="container">
    <div className='align-item-center'>
    <a className="navbar-brand fw-bold text-white fs-4" href="/">
      <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hospital-fill" viewBox="0 0 16 16">
      <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9m0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25M2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25M13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25"/>
    </svg>
        JetSetMed
      </a>
    </div>
      
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item px-2 fs-5">
            <a className="nav-link active text-white fw-normal" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item px-2 fs-5">
            <a className="nav-link text-white fw-normal" href="/">About</a>
          </li>
          <li className="nav-item px-2 fs-5">
            <a className="nav-link text-white fw-normal" href="/">MedicalKit</a>
          </li>
          <li className="nav-item px-2 fs-5">
            <a className="nav-link text-white fw-normal" href="/">Pricing</a>
          </li>
        </ul>
      </div>
      <div className='float-right'>
      <button type="button" className="btn btn-primary rounded-pill px-4 fw-bolder">Sign Up</button>
      </div>
    </div>
  </nav>
  )
}

export default Header;