import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import doctorVector from "../assets/image/doctor-vector.png";
import googleLogo from "../assets/image/google-color.png";
import metaLogo from "../assets/image/meta-color.png";
import facebookLogo from "../assets/image/facebook-color.png";
import '../styles/createAccount.css';
import { api } from "../utils/Rest-API";
import CountryPicker from '../components/CountryPicker';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: "",
    profilePhoto: "",
    role: "user"
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState('91');
  useEffect(() => {
    setFormData({ ...formData, 'country': selectedCountry });
    return () => {
    }
  }, [selectedCountry])
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        console.log("signup data ", formData);
        const response = await api('/auth/signup', formData, 'post', false);
        console.log("Response of signup ",response.data);
        if(response.data.success){
          localStorage.setItem('token', response.data.token);
          navigate('/account-success');
        }
        setApiError("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          country: "91",
          phoneNumber: "",
          profilePhoto: "",
          role: "user"
        })
      } catch (error) {
        setApiError("Failed to create account. Please try again.");
        console.log("Error to create account ", error);
      }
    }
  };

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
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h1 className="mb-1 text-center">Create an Account</h1>
            <p className="m-0 mb-3 text-center">Sign up with:</p>
            <div className="mb-3 text-center">
              <button className="btn btn-outline-secondary mr-2 btn-image">
                <img src={googleLogo} className="" alt="Google" />
              </button>
              <button className="btn btn-outline-secondary mr-2 btn-image">
                <img src={metaLogo} className="" alt="Meta" />
              </button>
              <button className="btn btn-outline-secondary btn-image">
                <img src={facebookLogo} className="" alt="Facebook" />
              </button>
            </div>
            <p className="text-center">or</p>
            <form onSubmit={handleSubmit}>
              <div class="row">
                <div class="col">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <small className="text-danger">{errors.firstName}</small>
                    )}
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <small className="text-danger">{errors.lastName}</small>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>
              <div class="row">
                <div class="col-4">
                  <div className="form-group">
                    <label>Country</label>
                    <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                    {errors.phoneNumber && (
                      <small className="text-danger">
                        {errors.phoneNumber}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              {apiError && <p className="text-danger">{apiError}</p>}
              <div className="row">
              <button type="submit" className="btn btn-sumbmit btn-block">
                <strong className="mx-2">Next</strong> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right mx-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
              </button>
              </div>
            </form>
            <p className="mt-3 text-center primary-text">
              Already have an account? <a href="/signin" className="primary-text b-font">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
