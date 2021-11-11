import React from 'react';
import { Button, Container } from "react-bootstrap";
import { Row, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent";

const Home = (props) => {
  var array = [
    "https://www.gq.com/gallery/the-best-sneakers-of-2021",
    "https://www.goat.com/collections/just-dropped",
    "https://hypebeast.com/footwear",
    "https://www.complex.com/sneakers/",
    "https://www.nike.com/gb/launch?s=upcoming",
    "https://www.complex.com/sneakers/biggest-sneaker-drops-complexcon-2021/",
    "https://www.complex.com/sneakers/2016/12/air-jordan-xi-space-jam-shows-sneaker-culture-mainstream-now",
    "https://www.complex.com/sneakers/air-jordan-release-dates/",
    "https://theconversation.com/the-history-of-sneakers-from-commodity-to-cultural-icon-127268"
  ];

  const randomItem = array[Math.floor(Math.random() * array.length)];
  console.log(randomItem)
   
  return (
 <div className="mx-auto">
    <Container>
      <Row className="justify-content-md-center">
          <div class="title">
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
            <Button
              onClick={() => window.open(randomItem) }
              variant="outline-success btn-lg"
            >
              INSPIRE ME
            </Button>
          </Stack>
      </Row>
      </Container>
      <div className="pt-5">
        <BootstrapCarouselComponent></BootstrapCarouselComponent>
      </div>
</div>

  );
};
export default Home;
