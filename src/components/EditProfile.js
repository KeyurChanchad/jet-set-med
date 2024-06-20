import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import '../styles/editProfile.css';
import { api } from '../utils/Rest-API';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Gagan N',
    lastName: 'Baranganti',
    email: 'gagan.baranganti@gmail.com',
    bloodGroup: 'B+ve',
    phoneNumber: '8617106953',
    institute: 'VIT University',
    city: 'Vellore',
    country: 'India'
  });

  useEffect(() => {
    getProfileData();
  
    return () => {
      
    }
  }, [])
  
  const getProfileData = async ()=> {
    try {
      const res = await api('/user', {}, 'get', true);
      console.log("response of get user ", res.data);
      if(res.data.success){
        const data = res.data.data;
        setProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          bloodGroup: '',
          phoneNumber: data.phoneNumber,
          institute: '',
          city: '',
          country: ''
        })
      }
    } catch (error) {
      console.log("error to get user profile ", error);
    }
  }

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
      }
      const res = await api('/user', data, 'put', true);
      console.log("response of edit user ", res.data);
      if(res.data.success){
        alert('profile edited')
      }
    } catch (error) {
      console.log("error to get user profile ", error);
    }
  };

  return (
    <Container className="edit-profile-container">
      <h2>Edit Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="my-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="my-3">
          <Col md={6}>
            <Form.Group controlId="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="text"
                name="bloodGroup"
                value={profile.bloodGroup}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="institute" className="my-3">
          <Form.Label>Institute Address</Form.Label>
          <Form.Control
            type="text"
            name="institute"
            value={profile.institute}
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="my-3">
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={profile.country}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;