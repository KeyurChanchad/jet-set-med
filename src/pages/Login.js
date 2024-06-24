import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorVector from "../assets/image/doctor-vector.png";
import googleLogo from "../assets/image/google-color.png";
import metaLogo from "../assets/image/meta-color.png";
import facebookLogo from "../assets/image/facebook-color.png";
import "../styles/createAccount.css";
import { api } from "../utils/Rest-API";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "react-bootstrap-icons";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [alertData, setAlertData] = useState({ showAlert: false, title: '', message: '', type: '' }); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        console.log("Formdata ", formData);
        const response = await api("/auth/login", formData, "post", false);
        console.log("Response of login ", response.data);
        if(response.data.success){
          setApiError("");
          localStorage.setItem('token', response.data.token);
          setAlertData({ showAlert: true, title: 'Success', message: 'Login successfully', type: 'success' });
          setFormData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            setAlertData({ showAlert: false, title: '', message: '', type: '' });
            navigate('/dashboard');
        }, 3000);
        }else {
          setApiError("Failed to login. Please try again.");
          console.log("Error to login ", response.data.message);
          setAlertData({ showAlert: true, title: 'Error', message: response.data.message, type: 'danger' });
          setTimeout(() => {
            setAlertData({ showAlert: false, title: '', message: '', type: '' });
        }, 3000);
        }
        // Handle successful account creation
      } catch (error) {
        setApiError("Failed to login. Please try again.");
        console.log("Error to login ", error);
        setAlertData({ showAlert: true, title: 'Error', message: error, type: 'danger' });
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
            <h2 className="mb-1 mt-3 text-center">Welcome Back!</h2>
            <p className="m-0 mb-3 text-center">Sign in with:</p>
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
              <div className="form-group d-flex justify-content-between row">
                <div className="form-check col-sm-12 col-md-6">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDisabled"
                  />
                  <label className="form-check-label" for="flexCheckDisabled">
                    Remember me
                  </label>
                </div>
                <div className="primary-text col-sm-12 col-md-6">
                  <a href="/forgotPassword" className="primary-text b-font">
                    Forgot Your Password
                  </a>
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
              Don't have an account?{" "}
              <a href="/signup" className="primary-text b-font">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
