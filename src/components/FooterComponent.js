import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="bg-sec text-white mt-5 text-center">
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center text-prim mt-2 fw-bold">
            <div>
              <h5 className='fw-bold'>About Us</h5>
              <p>Experience the pleasure of shopping for the finest tea blends, as we take you on a sensory adventure of aromas, textures, and tastes, with a personalized service that caters to your every need.</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center text-prim mt-2 fw-bold">
            <div>
            <ul className="list-unstyled">
              <li>1234 Main St.</li>
              <li>Springfield, USA</li>
              <li>Phone: (555) 555-1234</li>
              <li>Email: info@example.com</li>
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-light py-3 text-prim fw-bold">
        <Container>
          <p className="mb-0 text-center text-prim fw-bold">&copy; 2023 Aras Butrimanskas. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

// chat gpt cia :D