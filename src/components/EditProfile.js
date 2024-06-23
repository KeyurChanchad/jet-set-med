import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "../styles/editProfile.css";
import { api } from "../utils/Rest-API";
import user from '../assets/image/user.png';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bloodGroup: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "India",
  });

  useEffect(() => {
    getProfileData();

    return () => {};
  }, []);

  const getProfileData = async () => {
    try {
      const res = await api("/user", {}, "get", true);
      console.log("response of get user ", res.data);
      if (res.data.success) {
        const data = res.data.data;
        setProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          bloodGroup: "",
          phoneNumber: data.phoneNumber,
          address: "",
          city: "",
          country: "",
        });
      }
    } catch (error) {
      console.log("error to get user profile ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(profile);
    try {
      const data = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
      };
      const res = await api("/user", data, "put", true);
      console.log("response of edit user ", res.data);
      if (res.data.success) {
        alert("profile edited");
      }
    } catch (error) {
      console.log("error to get user profile ", error);
    }
  };

  return (
    <Container className="edit-profile-container">
      <div className="d-flex align-items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <h2 className="dashboard-heading ps-3">General Details</h2>
      </div>
      <div className="d-flex align-items-center">
        <Form onSubmit={handleSubmit}>
          <Row className="my-3">
            <Col md={6}>
              <label className="sr-only" for="inlineFormInputGroup">
                First Name
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </div>
                </div>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col md={6}>
              <label className="sr-only" for="inlineFormInputGroup">
                Last Name
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </div>
                </div>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Row>

          <label className="sr-only" for="inlineFormInputGroup">
            {" "}
            Email Address{" "}
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text input-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
            </div>
            <Form.Control
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <Row className="my-3">
            <Col md={4}>
              <label for="inputState">Blood Group</label>
              <select
                id="inputState"
                name="bloodGroup"
                className="form-control"
                onChange={handleChange}
                value={profile.bloodGroup}
              >
                <option value={"A+"}>A+</option>
                <option value={"B+"}>B+</option>
                <option value={"A-"}>A-</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
            </Col>
            <Col md={8}>
              <label className="sr-only" for="inlineFormInputGroup">
                Phone Number
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                  </div>
                </div>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Row>

          <Form.Group controlId="address" className="my-3">
            <label className="sr-only" for="inlineFormInputGroup">
              Enter Address
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text input-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>
              </div>
              <Form.Control
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Row className="my-3">
            <Col md={6}>
              <label className="sr-only" for="inlineFormInputGroup">
                City
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-buildings-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                    </svg>
                  </div>
                </div>
                <Form.Control
                  type="text"
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col md={6}>
              <label className="sr-only" for="inlineFormInputGroup">
                Country
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text input-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </div>
                </div>
                <Form.Control
                  type="text"
                  name="country"
                  value={profile.country}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Row>
          <Button variant="primary primary-bg" type="submit">
            Save Changes
          </Button>
        </Form>
        <div className="profile-pic-div ms-3">
          <div className="icons">
            <h5 className="dashboard-heading text-center">Profile picture</h5>
            <div className="d-flex justify-content-evenly mt-2">
              <button type="button" className="btn btn-outline-danger border-danger mx-2" style={{ border: '1px solid' }}>Delete</button>
              <button type="button" className="btn btn-outline-primary border-primary" style={{ border: '1px solid' }}>Update</button>
            </div>
          </div>
          <div className="text-center mt-3">
            <img src={user} alt="Profile pic" className="rounded" width={'150px'} height={'150px'}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditProfile;
