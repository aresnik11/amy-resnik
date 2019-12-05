import React from 'react'
import photo from '../assets/amy_resnik.png'

const About = () => {
    return (
        <div id="about">
            <div className="about-grid">
                <br/><br/>
                <div className="bio">
                    <h1>Hi, I'm Amy</h1>
                    <h3>I'm a detail-oriented full stack web developer with a passion and curiosity for solving problems through code.</h3>
                    <p>
                        I recently attended Flatiron School's web development immersive program where I learned JavaScript, React, Redux, and Ruby on Rails.
                        My goal is to never stop learning new and better ways to create seamless user experiences with clean and efficient code.
                    </p>
                    <p>
                        Before that, I worked in Quality Assurance for four years at BounceX, a marketing tech startup.
                        I was the second member of the QA team and worked cross-functionally first for client specific integrations and later for new platform wide features to validate functionality, logic, and user experience.
                    </p>
                    <p>
                        I graduated from Hamilton College in 2015 with a major in Mathematics and a minor in Computer Science.
                    </p>
                    <p>
                        When I'm not coding or learning, I enjoy reading mysteries/thrillers, traveling, logic puzzles, and adding to my jungle of plants.
                    </p>
                </div>
                <br/>
                <div className="bio-photo">
                    <img alt="Amy Resnik" src={photo} />
                </div>
                <br/><br/>
            </div>
        </div>
    )
}

export default About