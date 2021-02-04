import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import HeaderPanel from "./components/HeaderPanel/HeaderPanel";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><HeaderPanel /></Col>
      </Row>
      <Row>
        <Col><PhotoGallery /></Col>
      </Row>
    </Container>
  );
}

export default App;
