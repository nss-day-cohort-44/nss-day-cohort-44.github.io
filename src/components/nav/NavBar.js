import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import logo from './36logo.png'
import './NavBar.css'
import { Navbar, Nav, Button } from "react-bootstrap"
// Author: Lauren Riddle
// Purpose: To create the Navbar for the class website

const NavBar = () => (
  <header>
    <div className="flexContainer">
      <div className="flexContainer2">
        <nav className="flex-item navbar-fixed-top" id="navbar">
          <Navbar collapseOnSelect expand="lg" className="nav-width navbar-collapse">
          <Navbar.Brand href="#home"><img src={logo} alt="Cohort 36 Logo" id="classLogo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <ul className="container" id="center-nav-elements">
                <Nav.Link className="nav-a" href="#about">About</Nav.Link>
                <Nav.Link className="nav-a" href="#devs">Developers</Nav.Link>
                <Nav.Link className="nav-a" href="#tech">Technologies</Nav.Link>
                <Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link>
                <Button href="http://nashss.com/demoday" variant="outline-light" id="rsvpButton">RSVP FOR DEMO DAY APRIL 3</Button>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </div>
  </header>
)

//use withRouter() when you can't use the Route component
export default withRouter(NavBar);
