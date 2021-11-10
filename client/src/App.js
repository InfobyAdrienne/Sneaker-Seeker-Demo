import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Results from "./components/Results";
import Home from "./components/Home";
import DataFetching from "./components/DataFetching";
import {
  Button,
  Navbar,
  Nav,
  Container,
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

      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/datafetching" element={<DataFetching />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
