import React from 'react'
import photo from '../assets/amy_resnik.jpg'
import photo_shape from '../assets/amy_resnik_shape.png'

const About = (props) => {
    return (
        <div id="about">
            <div className="about-grid">
                <div>
                    <h1>Hi, I'm Amy!</h1>
                    <h3>I'm a </h3>
                    <p>
                        Bio here blah blah blahh
                    </p>
                    <p>
                        When I'm not coding, I ....
                    </p>
                </div>
                <div>
                    <img alt="Amy Resnik" src={photo_shape} id="photo" />
                </div>
            </div>
        </div>
    )
}

export default About