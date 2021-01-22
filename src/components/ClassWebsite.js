import React, { Component } from 'react'

import './ClassWebsite.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'
import $ from "jquery"
class ClassWebsite extends Component {
  componentDidMount() {
    //  Author: Lauren Riddle
    // This jquery turns the navbar from transparent to solid white on scroll.
    $(window).scroll(function () {
      if ($(window).scrollTop() > 150) {
        $(".navbar-fixed-top").addClass("bg-nav");
      } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
      }
    });
  }
  render() {
    return (
      <>
        <section id="home">
          <NavBar />
        </section>
        <ApplicationViews />
      </>
    )
  }
}

export default ClassWebsite