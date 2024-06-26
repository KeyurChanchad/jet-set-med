import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import personThinkingImg  from '../assets/image/idea.png';
import personQuestionImg  from '../assets/image/sky-woman-avatar 1.png'
import aspirinImg from '../assets/image/aspirin.png';
import '../styles/healthCareComponent.css';


const HealthcareComparison = () => {
  return (
    <Container className='helthcare-container'>
      <div className="img-container">
        <img src={personThinkingImg} alt="Person thinking" id='img1' />
        <h1 id="img2" className="heading-1">Still not convinced?</h1>
        <img src={personQuestionImg} alt="Person questioning" id='img3'  />
      </div>
      <Container className="my-5">
            <Row className="text-center">
                <Col>
                    <h2 className="heading-1">Healthcare Abroad vs JSM</h2>
                    <p className='heading-desc'>Why use more money when less do trick</p>
                </Col>
            </Row>
            <Row className="text-center my-4">
                <Col>
                    <img src={aspirinImg} alt="Aspirin" className="img-fluid" />
                    <h3 className="heading-3">Aspirin</h3>
                </Col>
            </Row>
            <Row className="text-center">
                <Col sm={6} md={3} xs={12}>
                    <Card className="aspirin-card active-aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> JetSetMed</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹1</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} xs={12}>
                    <Card className="aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> USA</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹86</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} xs={12}>
                    <Card className="aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> UK</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹35</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={3} xs={12}>
                    <Card className="aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> Australia</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹75</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Container>
  );
};

export default HealthcareComparison;