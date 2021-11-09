import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
// import Popup from "./components/Popup";
import DataFetching from "./components/DataFetching";
import {
  Button,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";

import "./App.css";

export default function App() {

  // const [isOpen, setIsOpen] = useState(false);
 
  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }
 
  return (
    
    // <div>
    // <input
    //   type="button"
    //   value="Click to Open Popup"
    //   onClick={togglePopup}
    // />
    // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    // {isOpen && <Popup
    //   content={<>
    //     <b>Design your Popup</b>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //     <button>Test button</button>
    //   </>}
    //   handleClose={togglePopup}
    //   />}

    <BrowserRouter>
      <Navbar fixed="top" />
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">SNEAKER SEEKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Button variant="outline-success">SEARCH</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="justify-content-md-center">
          <Col sm="3"></Col>
          <Col sm="6">
            <div class="title">
              <h1>FIND YOUR PERFECT SNEAKERS</h1>
            </div>
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            <Stack
              gap={2}
              direction="horizontal"
              className="col-md-7 mx-auto buttons-class"
            >
              <Button href="/search" variant="secondary">
                I KNOW WHAT I WANT
              </Button>
              <Button href="/results" variant="outline-secondary">
                INSPIRE ME
              </Button>
            </Stack>
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/datafetching" element={<DataFetching />}></Route>
      </Routes>
      </BrowserRouter>
      // </div>
  );
}
