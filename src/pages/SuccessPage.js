import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorVector from "../assets/image/doctor-vector.png";
import successIcon from "../assets/image/icon-park_success.png";
import "../styles/createAccount.css";
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleNavigate = async ()=> {
    console.log('Navigate to dashboard');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  }
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={doctorVector}
            alt="Medical Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <button className="btn btn-outline-secondary mr-2 btn-image">
                <img src={successIcon} className="" alt="Success" />
              </button>
                <h2 className="text-center">Account Created Successfully</h2>
            </div>
            <div className="row mt-3 w-50">
                <button className="btn btn-sumbmit btn-block" onClick={handleNavigate}>
                  <strong className="mx-2">Continue to Dashboard</strong>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
