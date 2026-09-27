import React, { Component } from 'react'

import './ClassWebsite.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

class ClassWebsite extends Component {
  handleScroll = () => {
    document.querySelector(".navbar-fixed-top")?.classList.toggle("bg-nav", window.scrollY > 150)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
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