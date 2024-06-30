import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/appointmentHistory.css';
import vectorIcon from '../assets/image/Vector.png';
import { ArrowRight, Search } from 'react-bootstrap-icons';

const AppointmentHistory = () => {
  return (
    <Container>
      {/* Search Bar and Filters */}
      <Row className="my-3">
        <Col md={6}>
        <form className="d-flex position-relative">
            <Search className='search-icon' />
        <input className="form-control me-2 search rounded-pill" type="search" placeholder="Search name or Contact number" aria-label="Search" />
      </form>
        </Col>
        <Col md={3}>
          <select className='d-down rounded-pill' >
            <option>k</option>
          </select>
        </Col>
        <Col md={3}>
        <select className='d-down rounded-pill' >
            <option>k</option>
        </select>

        </Col>
      </Row>

      {/* Cards */}
      <Row>
        {[...Array(9)].map((_, index) => (
          <Col xxl={4} lg={4} md={6} sm={12} key={index} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>
                  <Row className="p-2">
                    <Col xs={6}>
                        <Row>
                            <Col xs={3}>
                                <img src={vectorIcon} alt='nurse' />
                            </Col>
                            <Col xs={9}>
                                <h6 className="department">Orthopidiest</h6>
                                <span className="doctor-name">Dr. Sasi Sharma</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} className="text-end date">Wednesday, 13 March<br/>3:48 PM</Col>
                  </Row>
                </Card.Title>
                <Card.Footer>
                    <Row className="appointment-c-footer">
                        <Col xs={6}>
                            <span className='text-light'>Session #1</span>
                        </Col>
                        <Col xs={6} className="text-end">
                            <a href="" className='text-light'> Report <ArrowRight /> </a>
                        </Col>
                    </Row>
                </Card.Footer>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AppointmentHistory;
