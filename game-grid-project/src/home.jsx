import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import rocket from './media/rocket.png';
import minecraftHero from './media/minecraft-hero.png';
import panel from './media/panel.png';
import panel2 from './media/panel2.png';
import supportImg from './media/support.png';
import minecraftGroup from './media/minecraft-group.png';

export default function Home() {
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="fw-bold">De ultieme hosting</h1>
        <h1 className="fw-bold text-warning">voor jouw project</h1>
        <p className="text-muted">
          Lanceer vandaag nog je Minecraft server of VPS. Geniet van geweldige klantenservice,
          fantastische prestaties en het beste controlepaneel.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <Button variant="dark">Bekijk server hosting</Button>
          <Button variant="link">Lanceer jouw VPS</Button>
        </div>
      </Container>

      <Container className="my-5">
        <Row className="g-4 text-center">
          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5>Minecraft server hosting</h5>
                <p className="text-muted">Alle mods, versies en plugins. Java & Bedrock.</p>
                <Button size="sm" variant="outline-dark">Bestel server →</Button>
              </Card.Body>
              <Card.Img variant="bottom" src={minecraftHero} />
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5>Virtual private servers</h5>
                <p className="text-muted">Kies tussen AMD Ryzen 9 of Intel Xeon CPU's.</p>
                <Button size="sm" variant="outline-dark">Bestel VPS →</Button>
              </Card.Body>
              <Card.Img variant="bottom" src={rocket} />
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5>Domeinnamen</h5>
                <p className="text-muted">Eerlijke prijzen. Unieke lijst met TLDs.</p>
                <Button size="sm" variant="outline-dark">Registreer domein →</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5>Webhosting</h5>
                <p className="text-muted">Onoverbeterlijke webhosting.</p>
                <Button size="sm" variant="outline-dark">Je website hosten →</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold">In controle met ons fantastische paneel</h2>
            <p className="text-muted">
              Beheer je Minecraft server of VPS met ons controlepaneel, speciaal door ons gebouwd.
              <br /><br />
              🔧 Rijke aan features. 💡 Snel en gebruiksvriendelijk.
            </p>
            <Button variant="outline-dark">Bekijk de demo →</Button>
          </Col>
          <Col md={6}>
            <img src={panel} alt="paneel" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={panel2} alt="paneel 2" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">Krijg geweldige hulp van experts</h2>
            <p className="text-muted">
              Of je nu een vraag hebt of hulp zoekt bij je server setup – ons team staat klaar.
            </p>
            <Button variant="outline-dark">Bekijk de kennisbank →</Button>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6}>
            <h2 className="fw-bold">De beste Minecraft server hosting</h2>
            <p className="text-muted">
              Sinds 2013 combineren we snelheid, controle en support voor de ultieme ervaring.
            </p>
            <Button variant="outline-dark">Bestel Minecraft server hosting →</Button>
          </Col>
          <Col md={6}>
            <img src={minecraftGroup} className="img-fluid" alt="Minecraft groep" />
          </Col>
        </Row>
      </Container>

      <footer className="bg-light py-5 mt-5">
        <Container>
          <Row className="text-center text-md-start">
            <Col md={4}>
              <h5>Minecraft server</h5>
              <p>Start je eigen server direct online.</p>
              <Button variant="dark" size="sm">Start je server</Button>
            </Col>
            <Col md={4}>
              <h5>Virtual Private Server</h5>
              <p>Krachtige VPS hosting voor elk project.</p>
              <Button variant="outline-dark" size="sm">Lanceer VPS</Button>
            </Col>
            <Col md={4}>
              <h5>Webhosting</h5>
              <p>Betrouwbare webhosting zonder limieten.</p>
              <Button variant="outline-dark" size="sm">Je website hosten</Button>
            </Col>
          </Row>

          <hr className="my-4" />

          <Row>
            <Col className="text-center">
              <p className="text-muted mb-0">© 2025 Game Grid – Alle rechten voorbehouden</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
