import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import India from "./pages/India";
import Buisness from "./pages/Buisness";
import Tech from "./pages/Tech";
import Entertainment from "./pages/Entertainment";
import Main from "./pages/Main";
import Sports from "./pages/Sports";

export default class NavbarComp extends Component {

  constructor(props){
    super(props);

    this.state={
    };

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg={"dark"} variant={"dark"} expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/"} >World News</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="m-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/home"}  >Home</Nav.Link>
                  <Nav.Link as={Link} to={"/buisness"}  >Buisness</Nav.Link>
                  <Nav.Link as={Link} to={"/entertainment"}  >Entertainment</Nav.Link>
                  <Nav.Link as={Link} to={"/tech"}  >Tech</Nav.Link>
                  <Nav.Link as={Link} to={"/sports"}  >Sports</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/india" element={<India />} />
            <Route path="/buisness" element={<Buisness />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </div>
      </Router>
    );
  }
}