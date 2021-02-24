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
                    <span className="thanks-titles">To John Wark - Founder of Nashville Software School,<br />
                    </span>
                    <div className="thanks-message">
                    Thank you for creating Nashville Software School. It’s felt like more than just a school to us- you’ve created an amazing, supportive community that can take anyone with a desire to grow and learn, and create a new path through life for them. There isn’t a single one of us in Cohort 44 that won’t have their future dramatically altered for the better by this experience.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">To our Lead Instructors - Jisie and Steve,<br />
                    And to our Instructional Team - Madi, Bryan, Mo, and Scott,<br /></span>
                    <div className="thanks-message">
                    It will honestly be strange to launch into our new careers and not have any of you there, you’ve become a huge part of all of our lives over the past six months. Thank you so much for your depth and breadth of knowledge, and your passion for imparting it on us. Through all our successes and failures, you always put learning first. To say we couldn’t have done this without all of you would be a massive understatement, so we’ll just say we’re so happy we didn’t have to.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">To Our Career Development Team - Ashley and Marla,<br />
                    </span>
                    <div className="thanks-message">
                    The amount of work you’ve both put in to make sure we successfully transition into the “real world” has been nothing short of amazing. From calming our nerves in your talks, to organizing mock interviews, to giving us such incredibly detailed feedback on our resumes, LinkedIns, portfolios, and anything else we needed- you two have been an incredible asset that we are lucky to have. I know many of us will continue to reach out in the future to both of you for your wisdom and insight.</div>
                </div>
                <div className="thanks-section">
                    <span className="thanks-titles">And lastly - to each other,<br />
                    </span>
                    <div className="thanks-message">
                    Hey, Cohort 44, we did it!<br />We just went through a pretty amazing six months, and it wouldn’t be a stretch to say we all recognize just how lucky we are that we got to do it with the people we did. To have an entire group be not only intelligent, creative, hard-working badasses, but also some of the kindest, most caring and empathetic people around is nothing short of astounding. And we’ll continue to support each other as we move forward, offering a helping hand through each other’s failures and celebrating each other’s successes. Because we’re Cohort 44, and we’re stuck with us now!</div>
                </div>
                </p>

        </section>
    </>
)

export default Thanks;