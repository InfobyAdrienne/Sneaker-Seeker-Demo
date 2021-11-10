import React, { useState } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from 'react-router-dom';

function Search() {
  const [sneakers, setSneakers] = useState([]);
  const [data, setData] = useState({
    brand: "",
    gender: "",
    colorway: "",
  });

  const url = `http://localhost:3001/api?brand=${data.brand}&gender=${data.gender}&colorway=${data.colorway}`;

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

  // const navigate = useNavigate();

  // const routeChange = () =>{ 
  //   navigate('/results')
  // }

  // onClick={routeChange}

  return (
    <div>
      <div style={{ margin: "50px" }}>
        <h1>Find your perfect Sneaker</h1>
        <h6> Search to generate matches</h6>
      </div>
      <div>
        <Container>
          <Form>
            <Col style={{ marginTop: "0px", maxWidth: "50%", float: "right" }}>
              <img src="trainers.jpg" alt="Trainers" />
            </Col>

            <Col style={{ maxWidth: "50%", float: "left", margin: "50px" }}>
              <form>
                <div className="container p-5">
                  <Form.Select
                    className="custom-select"
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

                <div className="container p-5">
                  <Form.Select
                    className="custom-select"
                    onChange={(e) => handle(e)}
                    id="gender"
                    value={data.gender}
                  >
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
                </div>

                <div className="container p-5">
                  <Form.Select
                    className="custom-select"
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
                </div>

                <Button variant="outline-secondary" type="Submit" value="Submit" onClick={(e) => fetchData(e)}>
                  Submit
                </Button>
              </form>
            </Col>
          </Form>
        </Container>
      </div>

      <div>
        <ul>
          {sneakers.map((sneaker) => (
            <li key={sneaker.id}>
              <li>{sneaker.shoe}</li>
              <li> Retail price: £{sneaker.retailPrice}</li>
              <img src={sneaker.media.smallImageUrl} alt="sneaker" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Search;

// for the button style={{ float: "right", position: "relative" }} also need to redirect to results