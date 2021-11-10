import React from "react";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent";

const Home = (props) => {
  return (
    <div className="mx-auto">
      <Container style={{ Image: "url(/trainers.jpg)" }}>
        <Row className="justify-content-md-center">
          <Col sm="3"></Col>
          <Col sm="6" >
            <div>
              <h1 class="headline p-5">FIND YOUR PERFECT SNEAKERS</h1>
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
      </Container>
      <div className="pt-5">
        <BootstrapCarouselComponent></BootstrapCarouselComponent>
      </div>
    </div>
    //    <div className="Carousel">
    //
    //  </div>
  );
};
export default Home;
