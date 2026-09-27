import React, { Component } from 'react';
import "./studentCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ResumeDialog from './studentResume'
import CapstoneDialog from './studentCapstone'

const studentImages = import.meta.glob('../../images/students/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

class StudentCard extends Component {
    render() {
        return (
            <>
              <div className="student-card">
                {/* Ternary for HIRED label */}
                {this.props.student.isHired ? (
                <p id="hiredLabel">
                <DoneOutlineIcon style={{ fontSize: 36 }}/>
                <span id="hiredText">Hired</span></p>
                ) : <p id="availableLabel">
                <ErrorOutlineIcon style={{ fontSize: 36 }}/>
                <span id="availableText">Available For Hire</span></p>}
                <div className="card-content">
                    <div className="card-fx">
                      <picture>
                      <img src={studentImages[`../../images/students/${this.props.student.proImg}`]} alt={`${this.props.student.firstName} ${this.props.student.lastName} portrait`} className="student-serious-photo" />
                      <img src={studentImages[`../../images/students/${this.props.student.funImg}`]} alt="" className="student-fun-photo" />
                      </picture>
                    </div>
                    <h2 className="student-name">{this.props.student.firstName} {this.props.student.lastName}</h2>
                    <div className="student-links">
                      <div className="icon-container">
                        { this.props.student.portfolio !== "" ?
                        ( <a href={`${this.props.student.portfolio}`} target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="icons" ><FontAwesomeIcon icon={faGlobe}  fill="none"/></a>)
                        : (<></>)}

                        { this.props.student.github !== "" ?
                        (<a href={`${this.props.student.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icons"><FontAwesomeIcon icon={faGithub}  /></a>)
                        : (<></>)}
                        { this.props.student.linkedIn !== "" ?
                        (<a href={`${this.props.student.linkedIn}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icons"><FontAwesomeIcon icon={faLinkedin}  /></a>)
                        : (<></>)}
                        { this.props.student.email !== "" ?
                        (<a href={`mailto:${this.props.student.email}`} aria-label="Email" className="icons"><FontAwesomeIcon icon={faEnvelope}  /></a>)
                        : (<></>)}
                      </div>
                      {this.props.student.capstoneURL && <CapstoneDialog student={this.props.student}/>}
                      {this.props.student.resume && <ResumeDialog student={this.props.student}/>}
                        <p className="student-quote">{this.props.student.quote} <br /> {this.props.student.quoteAuthor}</p>
                    </div>
                </div>
              </div>
            </>
        )
    }
}

        export default StudentCard;
