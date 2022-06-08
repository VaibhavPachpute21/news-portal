import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

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
                  <Nav.Link as={Link} to={"/home"}  >World</Nav.Link>
                  <Nav.Link as={Link} to={"/home"}  >India</Nav.Link>
                  <Nav.Link as={Link} to={"/home"}  >Politics</Nav.Link>
                  <Nav.Link as={Link} to={"/home"}  >Buisness</Nav.Link>
                  <Nav.Link as={Link} to={"/home"}  >Tech</Nav.Link>
                  <Nav.Link as={Link} to={"/home"}  >Sports</Nav.Link>
                  <Nav.Link as={Link} to={"/about"} >About</Nav.Link>
                  <Nav.Link as={Link} to={"/contact"} >Contact</Nav.Link>
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
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }
}