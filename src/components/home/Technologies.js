import React from 'react';
import './Technologies.css'
// Author: Sam Pita
// Purpose: To display the technologies Cohort 44 has gained knowledge and practice in


const Technologies = () => (
    <>
        <br />
        <section className="technologies">
            <h2 id="techTitle">Technologies</h2><br />
            <div className="technologiesContainer">
                <div className="cardContainer">
                    <img className="techImage" src="/techs/octocat.png" alt="GitHub Icon"></img>
                    <div className="technologyText">GitHub</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/HTML5.png" alt="HTML5 Icon"></img>
                    <div className="technologyText">HTML5</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/CSS3.png" alt="CSS3 Icon"></img>
                    <div className="technologyText">CSS3</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/Boostrap_logo.svg" alt="Bootstrap Icon"></img>
                    <div className="technologyText">Bootstrap</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/JS.svg" alt="JavaScript Icon"></img>
                    <div className="technologyText">Javascript</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/react.svg" alt="React Icon"></img>
                    <div className="technologyText">React JS</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/postman.png" alt="Postman Icon"></img>
                    <div className="technologyText">Postman</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/firebaseSquare.png" alt="Firebase Icon"></img>
                    <div className="technologyText">Firebase</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="https://nss-day-cohort-34.github.io/Class-Website/images/techs/npm.png" alt="NPM Icon"></img>
                    <div className="technologyText">NPM</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/Python_logo.svg" alt="Python Icon"></img>
                    <div className="technologyText">Python</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/django.png" alt="Django Icon"></img>
                    <div className="technologyText">Django</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/SQL.png" alt="SQL Icon"></img>
                    <div className="technologyText">SQL</div>
                </div>
                <div className="cardContainer">
                    <img className="techImage" src="/techs/VScode.png" alt="VSCode Icon"></img>
                    <div className="technologyText">Visual Studio Code</div>
                </div>
            </div>
        </section>
    </>
)
export default Technologies;