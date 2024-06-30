import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "../styles/dashboard.css";
import { Airplane, ArrowRight, Cake, Droplet, Envelope, House, Plus, Telephone } from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col lg={8} md={12}>
          <div className="wising-dashboard">
            <h2>Good Morning Keyur!</h2>
            <h2>We hope you are doing well</h2>
          </div>
          <div className="appointment-dashboard">
            <h3 className="heading-3 text-dark text-start">Appointment</h3>
            <div className="d-flex flex-column align-items-center justify-content-center appointment-dashboard-card rounded ">
                <Plus size={40} color="white"/>
                <h5>Book an appointment</h5>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12}>
          <Card className="shadow p-3 mb-3 bg-body rounded border-0">
            <div className="d-flex align-items-center">
              <img
                src={require("../assets/image/user.png")}
                alt="user-profile-img"
                width={60}
                height={60}
                className="border border-secondary rounded user-profile-img"
              />
              <div className="ms-3">
                <h4 className="m-0 username">Keyur chanchad</h4>
                <span className="badge bg-warning rounded-pill">Free</span>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center flex-column">
                <Row className="w-100">
                    <Col sm={2} md={2}><Envelope className="dashaboard-card-icon" /></Col>
                    <Col sm={8} md={8} className="dashaboard-card-profile-text">abc.Gmail.com</Col>
                </Row>
                <Row className="w-100">
                    <Col sm={2} md={2}><Cake className="dashaboard-card-icon" /></Col>
                    <Col sm={8} md={8} className="dashaboard-card-profile-text">xx/xx/xxxx</Col>
                </Row>
                <Row className="w-100">
                    <Col sm={2} md={2}><Droplet className="dashaboard-card-icon" /></Col>
                    <Col sm={8} md={8} className="dashaboard-card-profile-text">B+ve</Col>
                </Row>
                <Row className="w-100">
                    <Col sm={2} md={2}><House className="dashaboard-card-icon" /></Col>
                    <Col sm={8} md={8} className="dashaboard-card-profile-text">Banglore, india</Col>
                </Row>
                <Row className="w-100">
                    <Col sm={2} md={2}><Telephone className="dashaboard-card-icon" /></Col>
                    <Col sm={8} md={8} className="dashaboard-card-profile-text">+91 xxxxxxxxxx</Col>
                </Row>
            </div>
          </Card>
          <div className="our-services-dashboard">
            <h2 className="text-center text-light">Our Services</h2>
            <Row>
                <Col md={2}><Telephone className="dashaboard-card-icon text-light" /></Col>
                <Col md={10} className="dashaboard-card-profile-text text-light">Worldwide Travel Kit Delivery</Col>
            </Row>
            <Row>
                <Col md={2}><Telephone className="dashaboard-card-icon text-light" /></Col>
                <Col md={10} className="dashaboard-card-profile-text text-light">Worldwide Travel Kit Delivery</Col>
            </Row>
            <Row>
                <Col md={2}><Airplane className="dashaboard-card-icon text-light" /></Col>
                <Col md={10} className="dashaboard-card-profile-text text-light">Global Medical Assistance</Col>
            </Row>
            <Row>
                <Col><Button className="bg-light text-primary rounded text-center w-100">Explore Our Services <ArrowRight /></Button></Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
