import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import personThinkingImg  from '../assets/image/idea.png';
import personQuestionImg  from '../assets/image/sky-woman-avatar 1.png'
import aspirinImg from '../assets/image/aspirin.png';
import '../styles/healthCareComponent.css';


// const Heading = styled.h1`
//   font-family: 'Bitter-ExtraBold';
//   font-weight: '800';
//   margin: 20px 0;
//   color: #194176;
//   font-size: 4rem;
//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const SubHeading = styled.h3`
//   color: #194176;
//   font-family: 'Bitter-Bold';
//   margin: 10px 0;
//   font-size: 2rem;
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   color: #194176;
// `;

// const PriceComparison = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
//   max-width: 70%;
//   margin: 20px 0;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const PriceCard = styled.div`
//   background: #f8f8f8;
//   padding: 10px;
//   border-radius: 8px;
//   margin: 10px;
//   width: 15rem;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   @media (max-width: 768px) {
//     margin: 5px 0;
//   }
// `;

// const Price = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   margin-top: 5px;
//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
// `;


// const AspirinIcon = styled.div`
//   width: 100%;
//   margin: 10px 0;
// `;


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
                <Col md={3}>
                    <Card className="aspirin-card active-aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> JetSetMed</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹1</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> USA</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹86</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="aspirin-card">
                        <Card.Body>
                            <Card.Title className="aspirin-card-title"> UK</Card.Title>
                            <Card.Text className="aspirin-card-desc">₹35</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
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