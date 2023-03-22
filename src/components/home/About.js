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
                        <p className="about-paragraph">We are a diverse [array] of people with different backgrounds. We came to Nashville Software School as military veterans, musicians, graphic designers, food service professionals, salespeople, multi-tasking parents, and much much more. We leave NSS as full stack software developers.<br /><br />We may come from different backgrounds, but we have something in common. We are <span className="character-traits-yellow">passionate problem-solvers, amateur meme-makers,</span> and not afraid of a little hard work. Ultimately, we have joined together in support of each other for the experience of a lifetime.<br /><br />Six months ago we set out to immerse ourselves in ReactJS, JavaScript, Python, and Django. Throughout our journey we laughed together, failed together, triumphed together, and learned how to learn together. We became a family. We have grown not only as developers, but also as humans, realizing that the sky is the limit if we have <span className="character-traits-blue">determination</span> and an <span className="character-traits-blue">endless thirst for learning</span>. Now we are ready to channel our passion for software development into jobs where we can continue learning and making a difference.</p><br />
                        <h3 className="software-devs">We are full stack software developers. </h3><br /><h2 className="c44">We are Cohort 44.</h2>
                    </section>
                </div>
            </>
        )
    }
}

export default AboutUs;
