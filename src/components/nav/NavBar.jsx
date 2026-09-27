import React from 'react';
import NSSLogo from './nss-logo-compact.png'
import './NavBar.css'
import { Navbar, Nav, Button } from "react-bootstrap"

// Original Author: Lauren Riddle
// Purpose: To create the Navbar for the class website

const NavBar = () => (
  <header>
    <nav className="navbar-fixed-top" id="navbar">
      <Navbar collapseOnSelect expand="lg" className="nav-width">
        <Navbar.Brand href="#home">
          <img src={NSSLogo} alt="Nashville Software School" id="classLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#devs">Developers</Nav.Link>
            <Nav.Link href="#pods">Podcasts</Nav.Link>
            <Nav.Link href="#tech">Tech</Nav.Link>
            <Nav.Link href="#thanks">Thanks</Nav.Link>
            <Button href="https://nashss.com/demoday" variant="outline-light" id="rsvpButton">
              DEMO DAY
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  </header>
)

export default NavBar;