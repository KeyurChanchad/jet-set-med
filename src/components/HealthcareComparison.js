import React from 'react';
import styled from 'styled-components';
import personThinkingImg  from '../assets/image/idea.png';
import personQuestionImg  from '../assets/image/sky-woman-avatar 1.png'
import aspirinImg from '../assets/image/question.png';
import '../styles/healthCareComponent.css';

const Container = styled.div`
margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Heading = styled.h2`
  margin: 20px 0;
  color: #194176;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubHeading = styled.h3`
  color: #194176;
  font-family: 'Bitter-Bold';
  margin: 10px 0;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #194176;
`;

const PriceComparison = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 50%;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PriceCard = styled.div`
  background: #f8f8f8;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 12rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  max-width: 20%;
  height: auto;
`;

const AspirinIcon = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HealthcareComparison = () => {
  return (
    <Container>
      <Row>
        <Image src={personThinkingImg} alt="Person thinking" id='img1' />
        <Heading id="img2">Still not convinced?</Heading>
        <Image src={personQuestionImg} alt="Person questioning" id='img3'  />
      </Row>
      <Heading>Healthcare Abroad vs JSM</Heading>
      <Description>Why use more money when less do trick</Description>
      <AspirinIcon>
        <Image src={aspirinImg} alt="Aspirin" id='aspirinlogo'/>
      </AspirinIcon>
      <SubHeading>Aspirin</SubHeading>
      <PriceComparison>
        <PriceCard className='active'>
          <div>JetSetMed</div>
          <Price>₹1</Price>
        </PriceCard>
        <PriceCard>
          <div>USA</div>
          <Price>₹86</Price>
        </PriceCard>
        <PriceCard>
          <div>UK</div>
          <Price>₹35</Price>
        </PriceCard>
        <PriceCard>
          <div>Australia</div>
          <Price>₹75</Price>
        </PriceCard>
      </PriceComparison>
    </Container>
  );
};

export default HealthcareComparison;