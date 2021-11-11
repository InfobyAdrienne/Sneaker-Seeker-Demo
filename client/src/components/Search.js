import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Popup from "./Popup";
// import Cards from "./Cards";
import './Card.css';

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const [openSneaker, setOpenSneaker] = useState(false);

  const togglePopup = (id) => {
    setOpenSneaker(id);
    setIsOpen(!isOpen);
  };

  const [sneakers, setSneakers] = useState([]);
  const [data, setData] = useState({
    brand: "",
    gender: "",
    colorway: "",
  });

  let baseUrl = `https://sneaker-seaker-backend.herokuapp.com/api`;

  let query = [];

  if (data.brand !== "") {
    query.push(`brand=${data.brand}`);
  }
  if (data.gender !== "") {
    query.push(`gender=${data.gender}`);
  }
  if (data.colorway !== "") {
    query.push(`colorway=${data.colorway}`);
  }
  let queryString = query.join("&");

  let url = queryString.length === 0 ? baseUrl : `${baseUrl}?${queryString}`;

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json.results);
      setSneakers(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <body>
      <div>
        <div>
          <Container className="container">
            <Row>
              <Form className="container auto">
              <Col className="column">
                  <form >
                    <div>
                      <h3>SELECT YOUR STYLE</h3>
                    </div>
                    <div className="dropdown-brand">
                      <Form.Select
                        className="custom-select form-select-lg"
                        onChange={(e) => handle(e)}
                        id="brand"
                        value={data.brand}
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
                    </div>
                    <div className="dropdown">
                      <Form.Select
                        className="custom-select form-select-lg"
                        onChange={(e) => handle(e)}
                        id="gender"
                        value={data.gender}
                      >
                        <option hidden value="">
                          Category
                        </option>
                        <option value="MEN">Men</option>
                        <option value="WOMEN">Women</option>
                        <option value="UNISEX">Unisex</option>
                        <option value="CHILD">Junior</option>
                      </Form.Select>
                    </div>

                    <div className="dropdown-colour">
                      <Form.Select
                        className="custom-select form-select-lg"
                        onChange={(e) => handle(e)}
                        id="colorway"
                        value={data.colorway}
                      >
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
                      <div className="apply-button">
                        <Button
                          className="form-btn"
                          variant="outline-success btn-lg"
                          type="Submit"
                          value="Submit"
                          onClick={(e) => fetchData(e)}
                        >APPLY
                      </Button>
                    </div>
                    </div>


                  </form>
                </Col>
              </Form>
            </Row>
          </Container>
        </div>

        <div className='cards'>
        <div className="cards__container">
            <div className="cards__wrapper">
          {sneakers.map((sneaker) => (
            <p key={sneaker.id} {...sneaker}>
              
              <button className="shoe_button"
                onClick={() => {
                  console.log(sneaker.id);
                  togglePopup(sneaker.id);
                }}>
                <p>{sneaker.shoe} </p>
                <p> Retail price: £{sneaker.retailPrice}</p>
                <img src={sneaker.media.thumbUrl} alt="sneaker" />
              </button>
              
              {isOpen && openSneaker === sneaker.id && (
                <Popup
                  content={
                    <>
                      <p>
                        <b>Information</b>
                      </p>
                      <p>Sneaker: {sneaker.shoe}</p>
                      <p>Brand: {sneaker.brand}</p>
                      <p>Colour: {sneaker.colorway}</p>
                      <p>Release Date: {sneaker.releaseDate}</p>
                      <img src={sneaker.media.thumbUrl} alt="sneaker" />
                    </>
                  }
                  handleClose={() => togglePopup(sneaker.id)}
                />
              )}
            </p>
          ))}
        </div>
      </div>
      </div>
      </div>
    </body>
  );
}
export default Search;
