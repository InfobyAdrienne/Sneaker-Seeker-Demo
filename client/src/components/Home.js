import React from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Stack,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = (props) => {
  return (
    <Container style={{ Image: "url(/trainers.jpg)" }}>

    <Row className="justify-content-md-center">
      <Col sm="3"></Col>
      <Col sm="6">
        <div class="title">
          <h1>FIND YOUR PERFECT SNEAKERS</h1>
        </div>
        <Stack
          gap={2}
          direction="horizontal"
          className="col-md-7 mx-auto buttons-class"
        >
          <Button href="/search" variant="secondary">
            I KNOW WHAT I WANT
          </Button>
          <Button href="/inspire" variant="outline-secondary">
            INSPIRE ME
          </Button>
        </Stack>
      </Col>
      <Col sm="3"></Col>
    </Row>
    <Carousel>
      <Carousel.Item>
      </Carousel.Item>
    </Carousel>
  </Container>
  )
}
export default Home;