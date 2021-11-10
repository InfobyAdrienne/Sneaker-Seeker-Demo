import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
// import Popup from "./components/Popup";
import DataFetching from "./components/DataFetching";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
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
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">SNEAKER SEEKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              class="navbar"
              className="me-auto my-2 my-lg-0"
              navbarScroll
            ></Nav>
            <Button class="nav-search" href="/search" variant="outline-success">
              SEARCH
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div class="title">
          <h1>FIND YOUR PERFECT SNEAKERS</h1>
        </div>
        <Row>
          <Col>
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            <Button class="search-btn" href="/search" variant="secondary">
              I KNOW WHAT I WANT
            </Button>
          </Col>
          <Col>
            <Button href="/results" variant="outline-success">
              INSPIRE ME
            </Button>
          </Col>
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
