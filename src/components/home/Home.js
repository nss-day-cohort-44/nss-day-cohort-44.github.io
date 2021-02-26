import React, { Component } from 'react'
import classPhoto from './c44_logo_grid.jpg'
import classPhotoFun from './cohort44_bunch.jpg'
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

//DEFINE SHUFFLE FUNCTION THANK YOU COHORT 42
const shuffle = (arr) => {
    //start at the end of the list...
    let currentIndex = arr.length, holdThisForASec, numberOutOfAHat;
    //as long as there are still more to choose from...
    while (0 !== currentIndex) {
        //get a random index, rounding down
        //bc math.random produces an int between 0 & 1.
        numberOutOfAHat = Math.floor(Math.random() * currentIndex);
        //decrement
        currentIndex -= 1;
        //let's say our current index is 25 right now
        // store the value of the object at index 25 in the var tempvalue
        holdThisForASec = arr[currentIndex];
        //then you can set the val of the object at the current index position
        //equal to the val of the object at the random index position
        arr[currentIndex] = arr[numberOutOfAHat];
        //then we can se the val of the object that used to be at our random index
        //equal to the value of the object at index 25 which we stored in the temp var
        arr[numberOutOfAHat] = holdThisForASec;
        // and we'll keep switchin em around until we get to index 0,
    }
    //then return the array!
    return arr;
}

class Home extends Component {
  state = {
    students: [],
    joinedStudentsArray: [],
  }

  componentDidMount() {
    // ApiManager.getAll("students")
        const studentShuffle = shuffle(allStudents)
    //     //create array for students who are not hired
        const notHiredYet = studentShuffle.filter(student => !student.isHired)
    //     //create array for students who are hired
        const hired = studentShuffle.filter(student => student.isHired)
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
            </Carousel>

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
        {/* <Podcasts></Podcasts> */}
        <br />
        <br />
        <section id="thanks">
          <Thanks />
        </section>

        <footer>© 2021. Nashville Software School Day Cohort 44.</footer>
      </>
    )
  }
}

export default Home
