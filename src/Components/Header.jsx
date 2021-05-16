import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import logo from "./logo192.png"
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          collapseOnSelect
          expanded="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="./logo192.png"
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="search"
                  className="mr-sm-2"
                />{" "}
              </Form>
              <Button variant="outline-info"> Search </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Router exact path="/" component={Home} />
            <Router exact path="/about" component={About} />
            <Router exact path="/contacts" component={Contacts} />
            <Router exact path="/blog" component={Blog} />
          </Switch>
        </Router>{" "}
      </div>
    );
  }
}
