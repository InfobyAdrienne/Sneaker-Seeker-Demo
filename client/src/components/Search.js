import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = (props) => {
  const [currentBrand, setCurrentBrand] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setCurrentBrand(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(currentBrand);
    
  };

  console.log(currentBrand);
  

  return (
    <div>
      <div style={{ margin: "50px"}}>
        <h1>Find your perfect Sneaker</h1>
      <h6> Search to generate matches</h6>
      </div>
      <div>
        <Container>
          <Form>
            <Col style={{ marginTop: "0px", maxWidth: "50%", float: "right" }}>
              <img
                src="trainers.jpg"
                alt="Trainers"
              />
            </Col>

            <Col style={{ maxWidth: "50%", float: "left", margin: "50px"}}>
              <Row style={{ marginTop: "50px" }}>
                <Form.Select
                  className="custom-select"
                  onChange={handleChange}
                  // {(event) => changeBrand(event.target.value)}
                  // value={currentBrand}
                >
                  <option hidden value="">
                    Brand
                  </option>
                  <option value="NIKE">Nike</option>
                  <option value="JORDAN">Jordan</option>
                  <option value="CONVERSE">Converse</option>
                  <option value="ADIDAS">Adidas</option>
                  <option value="VANS">Vans</option>
                  <option value="PUMA">Puma</option>
                  <option value="REEBOK">Reebok</option>
                  <option value="NEW%20BALANCE">New Balance</option>
                  <option value="SAUCONY">Saucony</option>
                  <option value="ASICS">Asics</option>
                  <option value="AIR%20JORDAN">Under Armour</option>
                </Form.Select>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Form.Select className="custom-select" defaultValue="">
                  <option hidden value="">
                    Gender
                  </option>
                  <option value="MEN">Man</option>
                  <option value="WOMEN">Women</option>
                  <option value="CHILD">Child</option>
                  <option value="INFANT">Infant</option>
                  <option value="PRESCHOOL">Preschool</option>
                  <option value="TODDLER">Toddler</option>
                  <option value="UNISEX">Unisex</option>
                </Form.Select>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Form.Select className="custom-select" defaultValue="">
                  <option hidden value="">
                    Colour
                  </option>
                  <option value="RED">Red</option>
                  <option value="BLACK">Black</option>
                  <option value="BLUE">Blue</option>
                  <option value="PURPLE">Purple</option>
                  <option value="ORANGE">Orange</option>
                  <option value="GREEN">Green</option>
                  <option value="YELLOW">Yellow</option>
                  <option value="PINK">Pink</option>
                  <option value="WHITE">White</option>
                  <option value="BROWN">Brown</option>
                  <option value="GREY">Grey</option>
                </Form.Select>
              </Row>
              <Button
                style={{ float: "right", position: "relative"}}
                variant="outline-success"
                type="submit"
                value="Submit"
                onSubmit={handleSubmit}
              >
                Apply
              </Button>
            </Col>
          </Form>
        </Container>
      </div>
    </div>
  );
};
export default Search;
