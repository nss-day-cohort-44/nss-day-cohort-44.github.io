import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
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
          <Navbar.Brand href="#home">
            <svg xmlns="http://www.w3.org/2000/svg" width="500.322" height="264.492" viewBox="0 0 366.322 264.492" id="classLogo">
              <g id="Logo" transform="translate(-461.678 -677.508)">
                <text id="_44" data-name="44" transform="translate(706 919)" fill="#000" font-size="170" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">44</tspan></text>
                <text id="_44-2" data-name="44" transform="translate(700 919)" fill="#f05623" font-size="170" font-family="HelveticaNeue, Helvetica Neue"><tspan x="0" y="0">44</tspan></text>
                <ellipse id="Ellipse_9" data-name="Ellipse 9" cx="103" cy="97" rx="103" ry="97" transform="translate(461.678 709.733) rotate(-9)" fill="#f05623"/>
                <path id="Path_2" data-name="Path 2" d="M585.188,604.333" transform="translate(-47 212)" fill="none" stroke="#707070" stroke-width="1"/>
                <ellipse id="Ellipse_19" data-name="Ellipse 19" cx="66.5" cy="65" rx="66.5" ry="65" transform="translate(508 724)" fill="#fff"/>
                <ellipse id="Ellipse_20" data-name="Ellipse 20" cx="66.5" cy="65" rx="66.5" ry="65" transform="translate(522 736)" fill="#f05623"/>
                <ellipse id="Ellipse_17" data-name="Ellipse 17" cx="53.5" cy="51" rx="53.5" ry="51" transform="translate(541 754)" fill="#fff"/>
                <ellipse id="Ellipse_18" data-name="Ellipse 18" cx="53.5" cy="51" rx="53.5" ry="51" transform="translate(552 764)" fill="#f05623"/>
                <ellipse id="Ellipse_14" data-name="Ellipse 14" cx="34" cy="34.5" rx="34" ry="34.5" transform="translate(579 789)" fill="#fff"/>
                <ellipse id="Ellipse_15" data-name="Ellipse 15" cx="34" cy="34.5" rx="34" ry="34.5" transform="translate(588 797)" fill="#f05623"/>
                <circle id="Ellipse_16" data-name="Ellipse 16" cx="11" cy="11" r="11" transform="translate(619 827)" fill="#fff"/>
                <path id="Path_6" data-name="Path 6" d="M625.914,878.5c21.027.072,48.289,3.727,75.086,16.262,2.791,2.714-16.339-18.448-20.4-23.146-8.748-10.13-11.792-20.786-9.736-35.35C673.813,815.4,625.914,878.5,625.914,878.5Z" transform="translate(-1 -5)" fill="#f05623"/>
              </g>
            </svg>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <ul className="container" id="center-nav-elements">
                <Nav.Link className="nav-a" href="#about">About</Nav.Link>
                <Nav.Link className="nav-a" href="#devs">Developers</Nav.Link>
                <Nav.Link className="nav-a" href="#tech">Tech</Nav.Link>
                <Nav.Link className="nav-a" href="#thanks">Thanks</Nav.Link>
                <Button href="http://nashss.com/demoday" variant="outline-light" id="rsvpButton">RSVP FOR DEMO DAY MARCH 26TH</Button>
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
