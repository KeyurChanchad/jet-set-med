import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import doctorVector from "../assets/image/doctor-vector.png";
import googleLogo from "../assets/image/google-color.png";
import metaLogo from "../assets/image/meta-color.png";
import facebookLogo from "../assets/image/facebook-color.png";
import "../styles/createAccount.css";
import { api } from "../utils/Rest-API";
import CountryPicker from "../components/CountryPicker";
import { ArrowRight } from "react-bootstrap-icons";

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
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("91");
  const [alertData, setAlertData] = useState({
    showAlert: false,
    title: "",
    message: "",
    type: "",
  });

  useEffect(() => {
    setFormData({ ...formData, country: selectedCountry });
    return () => {};
  }, [selectedCountry]);

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
        const response = await api("/auth/signup", formData, "post", false);
        console.log("Response of signup ", response.data);
        if (response.data.success) {
          setAlertData({
            showAlert: true,
            title: "Success",
            message: "Account created successfully",
            type: "success",
          });
          localStorage.setItem("token", response.data.token);
          setApiError("");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            country: "91",
            phoneNumber: "",
            profilePhoto: "",
            role: "user",
          });
          navigate("/account-success");
        } else {
          setApiError("Failed to create account. Please try again.");
          console.log("Error to create account ", response.data.message);
          setAlertData({
            showAlert: true,
            title: "Error",
            message: response.data.message,
            type: "danger",
          });
        }
      } catch (error) {
        setApiError("Failed to create account. Please try again.");
        console.log("Error to create account ", error);
        setAlertData({
          showAlert: true,
          title: "Error",
          message: error,
          type: "danger",
        });
      }finally {
        setTimeout(() => {
            setAlertData({ showAlert: false, title: '', message: '', type: '' });
        }, 3000);
      }
    }
  };

  return (
    <div className="container-fluid">
      {alertData.showAlert && (
        <div
          className={`alert alert-${alertData.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alertData.title}</strong> {alertData.message}
          <button
            type="button"
            className="btn-close m-0"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="row vh-100">
        <div className="col-lg-6 col-md-12  d-flex align-items-center justify-content-center">
          <img
            src={doctorVector}
            alt="Medical Illustration"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="mb-1 text-center mt-3">Create an Account</h2>
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
            <form onSubmit={handleSubmit} className="w-100">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
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
                <div className="col-sm-12 col-md-6 col-lg-6">
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
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Country</label>
                    <CountryPicker
                      selectedCountry={selectedCountry}
                      setSelectedCountry={setSelectedCountry}
                    />
                  </div>
                </div>
                <div className="col-md-8">
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
                  <strong className="mx-2">Next</strong>{" "}
                  <ArrowRight />
                </button>
              </div>
            </form>
            <p className="mt-3 text-center primary-text">
              Already have an account?{" "}
              <a href="/login" className="primary-text b-font">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
