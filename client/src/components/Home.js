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
    "https://theconversation.com/the-history-of-sneakers-from-commodity-to-cultural-icon-127268", "https://www.sneakersnstuff.com/en/product/51306/nike-wmns-air-more-uptempo", 
    "https://en.wikipedia.org/wiki/Sneakers#Sneaker_culture", 
    "https://en.wikipedia.org/wiki/Sneaker_collecting", 
    "https://www.endclothing.com/gb/novesta-german-army-trainer-leather-nvsta-garmt-bltr.html", 
    "https://www.endclothing.com/gb/east-pacific-trade-dive-canvas-ep0sn1dv40401-org.html", 
    "https://www.highsnobiety.com/p/league-of-legends-pro-league-nike-dunk-low/", 
    "https://www.highsnobiety.com/p/gucci-balenciaga-triple-s/", 
    "https://www.highsnobiety.com/p/new-balance-550-fw21-release-date-price/", 
    "https://www.highsnobiety.com/p/spider-man-nike-air-jordan-1/", 
    "https://www.ssense.com/en-gb/men/product/balenciaga/blue-and-silver-x-pander-sneakers/7150631", 
    "https://www.ssense.com/en-gb/men/product/burberry/navy-and-black-two-tone-arthur-sneakers/7610251", 
    "https://www.ssense.com/en-gb/men/product/rick-owens-drkshdw/green-and-off-white-zebra-sneakers/7618631", 
    "https://www.ssense.com/en-gb/men/product/rick-owens-drkshdw/black-abstract-sneakers/7618871", 
    "https://www.ssense.com/en-gb/men/product/adidas-originals/black-sean-wotherspoon-edition-superearth-superstar-sneakers/8082951", 
    "https://thesolesupplier.co.uk/news/black-friday-sneaker-deals", 
    "https://www.thedropdate.com/releases/nike-air-jordan-1-mid-se-barcelona-sweater-dc7294-600", 
    "https://www.goat.com/sneakers/yeezy-boost-380-calcite-glow-yzy-380-calcite", 
    "https://www.kickgame.co.uk/products/justin-bieber-x-crocs-classic-clog-drew-207267-700", 
    "https://www.kickgame.co.uk/products/billie-eilish-x-air-jordan-1-wmns-ko-volt-dn2857-330", 
    "https://www.kickgame.co.uk/products/grateful-dead-x-nike-dunk-low-sb-yellow-bear-cj5378-700", 
    "https://www.kickgame.co.uk/products/off-white-x-nike-dunk-low-dear-summer-32-of-50", 
    "https://www.pinterest.co.uk/pin/137500594851452127/?d=t&mt=login"
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
            className="col-md-7 mx-auto buttons-class button-align"
          >
            <div class="button-align">
              <Button href="/search" variant="outline-success btn-lg" className="button-pad">
                I KNOW WHAT I WANT
              </Button>
              <Button
                onClick={() => window.open(randomItem) }
                variant="outline-success btn-lg"
                className="button-pad"
              >
                INSPIRE ME
              </Button>
            </div>
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
