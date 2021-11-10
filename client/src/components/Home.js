import React from 'react';
import { Button, Container } from "react-bootstrap";
import { Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = (props) => {
  return (
    <Container>
    <Row className="justify-content-md-center">
      <Col sm="3"></Col>
      <Col sm="6">
        <div className="title">
          <h1>FIND YOUR PERFECT SNEAKERS</h1>
        </div>
        <Stack
          gap={2}
          direction="horizontal"
          className="col-md-7 mx-auto buttons-class"
        >
          <Button href="/search" variant="outline-success btn-lg">
            I KNOW WHAT I WANT
          </Button>
          <Button href="/inspire" variant="outline-success btn-lg">
            INSPIRE ME
          </Button>
        </Stack>
      </Col>
      <Col sm="3"></Col>
    </Row>
  </Container>
  )
}
export default Home;