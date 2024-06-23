import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorVector from "../assets/image/doctor-vector.png";
import "../styles/createAccount.css";
import { api } from "../utils/Rest-API";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [apiError, setApiError] = useState("");
  const [alertData, setAlertData] = useState({ showAlert: false, title: '', message: '', type: '' }); 

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    const newError = {};
    if (!email) newError.email = "Email is required";
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      try {
        console.log("email ", email);
        const response = await api(
          "/auth/forgotPassword",
          { email },
          "post",
          false
        );
        console.log("Response of forgot password ", response.data);
        if (response.data.success) {
          setEmail("");
          setApiError("");
          setAlertData({ showAlert: true, title: 'Success', message: 'Password reset link has been sent to your email', type: 'success' });
        }else {
          setApiError("Failed to forgotPassword. Please try again.");
          console.log("Error to forgotPassword ", response.data.message);
          setAlertData({ showAlert: true, title: 'Error', message: response.data.message, type: 'danger' });
        }
        // Handle successful account creation
      } catch (error) {
        setApiError("Failed to forgotPassword. Please try again.");
        console.log("Error to forgotPassword ", error);
        setAlertData({ showAlert: true, title: 'Error', message: error, type: 'danger' });
      } finally {
        setTimeout(() => {
            setAlertData({ showAlert: false, title: '', message: '', type: '' });
        }, 3000);
      }
    }
  };

  return (
    <div className="container-fluid p-0">
      {
        alertData.showAlert && (
            <div className={`alert alert-${alertData.type} alert-dismissible fade show`} role="alert"> 
                <strong>{alertData.title}</strong> {alertData.message}
                <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
                ></button>
            </div>
        )
      }
      <div className="row vh-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={doctorVector}
            alt="Medical Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="mb-5 text-center">Forgot Your Password?</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter your email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
                {error.email && (
                  <small className="text-danger">{error.email}</small>
                )}
              </div>

              {apiError && <p className="text-danger">{apiError}</p>}
              <div className="row">
                <button type="submit" className="btn btn-sumbmit btn-block">
                  <strong className="mx-2">Verify Email</strong>{" "}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
