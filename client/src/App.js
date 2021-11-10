import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import DataFetching from "./components/DataFetching";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './ss-logo-bar.png'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">< img src={logo} class="logo img-fluid" alt="My logo" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            ></Nav>
            <Button className="nav-search" href="/search" variant="outline-success">
              SEARCH
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="Carousel">
        <BootstrapCarouselComponent></BootstrapCarouselComponent>
      </div> */}

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/datafetching" element={<DataFetching />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
  );
}
