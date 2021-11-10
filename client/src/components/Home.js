import React from "react";
import { Button, Container, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent";


const Home = (props) => {
  var array = [
    "https://www.gq.com/gallery/the-best-sneakers-of-2021",
    "https://www.goat.com/collections/just-dropped",
    "https://hypebeast.com/footwear",
    "https://www.complex.com/sneakers/",
    "https://www.nike.com/gb/launch?s=upcoming", //Snkrs
    "https://www.complex.com/sneakers/biggest-sneaker-drops-complexcon-2021/"
    
  ];

  const randomItem = array[Math.floor(Math.random() * array.length)];
  console.log(randomItem)
   
  return (

 <div className="mx-auto">
    <Container style={{ backgroundImage: "url(/trainers.jpg)" }}>
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
            <Button href="/search" variant="outline-secondary">
              I KNOW WHAT I WANT
            </Button>
            <Button
              onClick={() => window.open(randomItem) }
              variant="outline-secondary"
            >
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

  );
};
export default Home;
