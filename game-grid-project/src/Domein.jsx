import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
 
function Domein() {
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="fw-bold">Registreer</h1>
        <h1 className="text-dark">jouw domeinnaam</h1>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet co commodi soluta rerum deleniti? Numquam minima, nam excepturi dolorum magni beatae ab.
        </p>
 
        <Form className="d-flex justify-content-center mb-5">
          <Form.Control
            type="text"
            placeholder="Registreer een domeinnaam..."
            className="w-50 shadow-sm"
          />
          <Button variant="dark" className="ms-2">Zoek</Button>
        </Form>
 
        <Row className="g-4 justify-content-center">
          <Col xs={12} md={4}>
            <Card className="border-0 shadow h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold mb-3">DNS-beheer</Card.Title>
                <Card.Text className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatesuibusdam id praesentium.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
 
          <Col xs={12} md={4}>
            <Card className="border-0 shadow h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold mb-3">Betrouwbare prijzen</Card.Title>
                <Card.Text className="text-muted">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem delectus blanditiis retur magni modi.                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
 
          <Col xs={12} md={4}>
            <Card className="border-0 shadow h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold mb-3">21 beschikbare TLD's</Card.Title>
                <Card.Text className="text-muted">
Lorem ipsum dolor sit amet consectetur, adipisicing elitd, natus praesentium illum cumque tenetur excepturi!             </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
 
export default Domein;
 