import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import HeaderPanel from "./components/HeaderPanel/HeaderPanel";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import FooterPanel from "./components/FooterPanel/FooterPanel";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><HeaderPanel /></Col>
      </Row>
      <Row>
        <Col><PhotoGallery /></Col>
      </Row>
      <Row>
        <Col><FooterPanel /></Col>
      </Row>
    </Container>
  );
}

export default App;
