import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
import DataFetching from "./components/DataFetching";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
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
            <Button href="/search" variant="outline-success">
              SEARCH
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <div class="title">
          <h1 style={{ textAlign: "center" }}>FIND YOUR PERFECT SNEAKERS</h1>
        </div>
        <Row>
          <Col>
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            {/* <Image src="holder.js/171x180" thumbnail /> */}
            <Button style={{ float: "right" }} href="/search" variant="secondary">
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
  );
}
