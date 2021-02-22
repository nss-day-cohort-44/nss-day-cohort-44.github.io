import React, { Component } from 'react';
import './About.css'
// Author: Lauren Riddle
// Purpose: To create the About Us component for cohort 44


class AboutUs extends Component {
    render() {
        return (
            <>
                <br />
                <br />
                <div className='about-background'>
                    <section className="about-us">
                        <h1 className="hello">Meet Cohort 44!</h1>
                        <p className="about-paragraph">We are a diverse array of people from many different industries. Our work experience includes that of military veterans, musicians, graphic designers, food service professionals, salespeople, stay-at-home moms, and more. We come from different backgrounds, but we all have something in common. We are a <span className="charater-traits-yellow">passionate, hardworking, problem solving, meme making</span> group of people who came together for the experience of a lifetime.<br /><br />Six months ago, we set out to conquer ReactJS, JavaScript, Python, and Django. Throughout our journey, we laughed together, failed together, triumphed together, learned how to learn together, and we became family. We have grown not only as developers, but also as humans, realizing that the sky is the limit if you have <span className="charater-traits-blue">determination</span> and an <span className="charater-traits-blue">endless thirst for learning</span>. Now we are ready to channel our passion for software development into jobs where we can continue learning and making a difference.</p><br />
                        <h3 className="software-devs">We are full stack software developers. </h3><br /><h2 className="c44">We are Cohort 44.</h2>
                    </section>
                </div>
            </>
        )
    }
}

export default AboutUs;
