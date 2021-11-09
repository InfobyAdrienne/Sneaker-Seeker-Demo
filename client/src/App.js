import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
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
  );
}
