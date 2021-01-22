import React from 'react';
import './Thanks.css'
// Author: Sam Pita
// Purpose: To create a Thanks section to render on our homepage


const Thanks = () => (
    <>
        <br />
        <section className="about-us" id='thanks'>
            <h1 className="thanks">Thank You...</h1>

            <p className="thanks-paragraph">
                <div className="thanks-section">
                    <span className="thanks-titles">To John Wark, <br />
                    Founder of Nashville Software School <br />
                    </span>
                    <div className="thanks-message">
                    Thank you so much for creating this opportunity for us to change our lives. Nashville Software School is much more than just a school. It's an amazing, supportive community that embraces each student with the strength and care of a mother determined to see her children succeed.
                    We know you run a tight ship as a non-profit, yet you and your team still manage to carefully craft each detail of our experience and prepare us more than we could have ever imagined.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles"> To the NSS Team, <br />
                    Amy, Laura, Mandy, and Jeremiah <br /></span>
                    <div className="thanks-message">
                    Thank you for making every day and event run smoothly. Your hard work behind the scenes makes all the difference, and we appreciate you!</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">To Our Instructors, <br />
                    Jisie and Joe <br /></span>
                    <div className="thanks-message">
                    Thank you for so eloquently and happily sharing your knowledge with us during these last 6 months. The curriculum could get intense and fast-paced at times, but your humor and dedication to making sure each student had a certain level of understanding made the learning process so enjoyable (and funny, at times!). Words can't express how much we will miss being in your class every day.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles"> To Our Junior Instructors and Teaching Assistants, <br />
                    Kristen, Rose, and Jenna <br /></span>
                    <div className="thanks-message">
                    We would not have made it through this program without asking you guys a million questions! Thank you for helping guide us and reassure us along this road.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">To Our Career Development Team, <br />
                    Ashley and Kristin <br /></span>
                    <div className="thanks-message">
                    You are truly superheroes. You are a powerhouse duo that exemplifies how the size of the team does not matter nearly as much as the quality of the people on your team. Thank you for using your superhero magic to turn us into the best, graduate-ready packages we can be. We appreciate the long hours you spent with us, from resume feedback to interview prep to pep talks. <a href="https://www.youtube.com/watch?v=0iAzMRKFX3c" target="_blank">*cue "Wing Beneath My Wings" by Bette Midler*</a></div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">Lastly, <br />
                    To Our Fellow Cohort 36 Classmates <br /></span>
                    <div className="thanks-message">
                    This bootcamp was even more amazing because of the people we experienced it with. Cohort 36 is made up of wonderful people of the highest caliber. We supported each other through every trial and tribulation. We laughed together when we got stuck. We went out after class and karaoke'd to celebrate little wins. We are always here for each other, even in our post-NSS careers, and that makes it so much better.</div>
                </div>
                </p>

        </section>
    </>
)

export default Thanks;