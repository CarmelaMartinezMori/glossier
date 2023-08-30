import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/"><Navbar.Brand>Glossier</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>
                <Link to="/category/skincare" className="nav-link">
                  Skincare
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/category/makeup" className="nav-link">
                 Makeup
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/category/body" className="nav-link">
                 Body
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <button to="/cart" className="nav-link">
                  <CartWidget />
                </button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
