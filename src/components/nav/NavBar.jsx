import React from 'react';
import NSSLogo from './nss-logo-compact.png'
import './NavBar.css'
import { Navbar, Nav, Button } from "react-bootstrap"

// Original Author: Lauren Riddle
// Purpose: To create the Navbar for the class website

const NavBar = () => (
  <header>
    <div className="flexContainer">
      <div className="flexContainer2">
        <nav className="flex-item navbar-fixed-top" id="navbar">
          <Navbar collapseOnSelect expand="lg" className="nav-width navbar-collapse">
          <Navbar.Brand href="#home"><img src={NSSLogo} alt="Nashville Software School" id="classLogo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <ul className="container" id="center-nav-elements">
                <Nav.Link className="nav-a" href="#about">About</Nav.Link>
                <Nav.Link className="nav-a" href="#devs">Developers</Nav.Link>
                <Nav.Link className="nav-a" href="#pods">Podcasts</Nav.Link>
                <Nav.Link className="nav-a" href="#tech">Tech</Nav.Link>
                <Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link>
                <Button href="https://nashss.com/demoday" variant="outline-light" id="rsvpButton">DEMO DAY</Button>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </div>
  </header>
)

export default NavBar;