import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import personThinkingImg from "../assets/image/idea.png";
import personQuestionImg from "../assets/image/sky-woman-avatar 1.png";
import aspirinImg from "../assets/image/aspirin.png";
import "../styles/healthCareComponent.css";

const HealthcareComparison = () => {
    const healthcareData = [
        {
            id: 1,
            heading: "Healthcare Abroad",
            desc: "Why use more money when less do trick",
            img: aspirinImg,
            pricingData: [
                {
                    id: 1,
                    name: 'Jet set med',
                    price: 200
                },
                {
                    id: 2,
                    name: 'USA',
                    price: 500
                },
                {
                    id: 3,
                    name: 'UK',
                    price: 400
                },
            ]
        },
        {
            id: 2,
            heading: "Internationally",
            desc: "Set your healthcare in the comfort of your home",
            img: aspirinImg,
            pricingData: [
                {
                    id: 1,
                    name: 'AUS',
                    price: 1200
                },
                {
                    id: 2,
                    name: 'IND',
                    price: 3500
                },
                {
                    id: 3,
                    name: 'NY',
                    price: 4500
                },
            ]
        },
        {
            id: 3,
            heading: "JSM",
            desc: "Fill your healthcare in the comfort of your home",
            img: aspirinImg,
            pricingData: [
                {
                    id: 2,
                    name: 'Germany',
                    price: 900
                },
                {
                    id: 3,
                    name: 'Russia',
                    price: 5200
                },
            ]
        }
    ]
  return (
    <Container className="helthcare-container">
      <div className="img-container">
        <img src={personThinkingImg} alt="Person thinking" id="img1" />
        <h1 id="img2" className="heading-1">
          Still not convinced?
        </h1>
        <img src={personQuestionImg} alt="Person questioning" id="img3" />
      </div>
      <div
        id="carouselHelthcareAutoplaying"
        class="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {healthcareData.map((item, i) => (
            <Fragment>
              <div class={`carousel-item ${i === 0 && "active"}`} key={item.id}>
                <Container className="my-5">
                  <Row className="text-center">
                    <Col>
                      <h2 className="heading-1">{item.heading}</h2>
                      <p className="heading-desc">
                        {item.desc}
                      </p>
                    </Col>
                  </Row>
                  <Row className="text-center my-4">
                    <Col >
                      <img
                        src={item.img}
                        alt="Aspirin"
                        className="aspirin-img-fluid"
                      />
                      <h3 className="heading-3">Aspirin</h3>
                    </Col>
                  </Row>
                  <Row className="aspirin-pricing-row d-flex justify-content-evenly">
                  {
                    item.pricingData.map((data) => (
                            <Col sm={3} md={3} xs={3}>
                                <Card className="aspirin-card">
                                    <Card.Body>
                                        <Card.Title className="aspirin-card-title">
                                            {data.name}
                                        </Card.Title>
                                        <Card.Text className="aspirin-card-desc">
                                            {data.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            ))
                            }
                    </Row>
                 
                </Container>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHelthcareAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselHelthcareAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HealthcareComparison;
