import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <Navbar.Brand>Glossier</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/skincare" className="nav-link">
                Skincare
              </Link>
              <Link to="/category/makeup" className="nav-link">
                Makeup
              </Link>
              <Link to="/category/body" className="nav-link">
                Body
              </Link>
              <Link to="/category/fragrance" className="nav-link">
                Fragrance
              </Link>
            </Nav>
            <Nav>
              <Link to="/cart" className="nav-link">
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
