import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import golem from '.media/minecraft4.png';
import kist from '.media/minecraft5.webp';
import vogel from '.media/minecraft6.png';
import zombie from '.media/minecraft3.png';
import screen2 from '.media/screen2.png';
 
export default function About() {
  return (
    <Container className="py-4">
      <section className="mb-4">
        <h1>Minecraft Server Hosting</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="mt-3">
          <Button variant="dark" className="me-2">
            Bekijk pakketten
          </Button>
          <Button variant="outline-secondary">
            Alle features
          </Button>
        </div>
      </section>
 
      <Row className="g-4">
        <Col md={4}>
          <div className="border p-3">
            <h5>Alle modpacks & versies</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <img src={minecfraft2} alt="Minecraft" className="img-fluid" />
          </div>
        </Col>
 
        <Col md={8}>
          <Row className="g-3">
            <Col xs={12}>
              <div className="border p-3">
                <Row>
                  <Col md={9}>
                    <h5>Plugin ondersteuning</h5>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </Col>
                  <Col md={3}>
                    <img src={minecfraft} alt="Minecraft" className="img-fluid" />
                  </Col>
                </Row>
              </div>
            </Col>
 
            <Col md={6}>
              <div className="border p-3">
                <h5>Onbeperkt aantal servers</h5>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
 
            <Col md={6}>
              <div className="border p-3">
                <Row>
                  <Col>
                    <h5>Automatische back-ups</h5>
                    <p>Lorem ipsum dolor sit.</p>
                  </Col>
                  <Col md={4}>
                    <img src={minecfraft1} alt="Minecraft" className="img-fluid" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
 
      <div className="mt-5 mb-3">
        <h2 className="fw-bold">Kies je Minecraft server hosting pakket</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
 
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Wood</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">1 GB RAM</Card.Subtitle>
              <h5>€ 3.50</h5>
              <p>per maand</p>
              <Button variant="dark" className="w-100">
                Bestel nu
              </Button>
            </Card.Body>
          </Card>
        </Col>
 
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Stone</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">2 GB RAM</Card.Subtitle>
              <h5>€ 6.50</h5>
              <p>per maand</p>
              <Button variant="dark" className="w-100">
                Bestel nu
              </Button>
            </Card.Body>
          </Card>
        </Col>
 
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Coal</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3 GB RAM</Card.Subtitle>
              <h5>€ 9.50</h5>
              <p>per maand</p>
              <Button variant="dark" className="w-100">
                Bestel nu
              </Button>
            </Card.Body>
          </Card>
        </Col>
 
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="fw-bold">Iron</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">4 GB RAM</Card.Subtitle>
              <h5>€ 12.50</h5>
              <p>per maand</p>
              <Button variant="dark" className="w-100">
                Bestel nu
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
 
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={screen2} className="img-fluid" alt="" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3">Krijg geweldige hulp van experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button variant="outline-dark">Bekijk kennisbank →</Button>
          </Col>
        </Row>
      </Container>
 
      <Container className="my-5">
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6}>
            <h2 className="fw-bold mb-3">De beste Minecraft server hosting</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button variant="outline-dark">Bestel hosting →</Button>
          </Col>
          <Col md={6}>
            <img src={minecfraft4} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}