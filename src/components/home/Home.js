import React, { Component } from 'react'
import classPhoto from './class_photo_gradient.png'
import classPhotoFun from './class_photo_fun.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import './About.css'
import "./studentCard.css"
import ApiManager from '../../modules/ApiManager'
import StudentCard from './studentCard'
import AboutUs from "./About"
import Podcasts from "./Podcasts"
import Technologies from './Technologies'
import Thanks from './Thanks';
import allStudents from '../../modules/students'


class Home extends Component {
  state = {
    students: [],
    joinedStudentsArray: []
  }

  componentDidMount() {
    // ApiManager.getAll("students")
    //     //create array for students who are not hired
        const notHiredYet = allStudents.filter(student => !student.isHired)
    //     //create array for students who are hired
        const hired = allStudents.filter(student => student.isHired)
    //     // Join the two arrays together
        const joinedStudentsArray = notHiredYet.concat(hired)
        // set the joined array to state
        this.setState({
          students: joinedStudentsArray
        })
  }

  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={classPhoto}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={classPhotoFun}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section id="about">
          <AboutUs />
        </section>
        <div id="devs" className="container-cards">
          {this.state.students.map(student =>
            <StudentCard
            key={student.id}
            student={student}
            {...this.props}
            />
            )}
        </div>
        <br />
        <br />
        <section id="tech">
          <Technologies />
        </section>
        <Podcasts></Podcasts>
        <br />
        <br />
        <section id="thanks">
          <Thanks />
        </section>

        <footer>© 2020. Nashville Software School Day Cohort 36.</footer>
      </>
    )
  }
}

export default Home
