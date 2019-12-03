import React from 'react'
import resume from '../assets/amy_resnik_resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Intro = (props) => {
    return (
        <div id="intro">
            <h1 id="name">Amy Resnik</h1>
            <h2>Software Engineer</h2>
            <ul className="icons">
                <li>
                    <a href="https://www.linkedin.com/in/amy-resnik" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/aresnik11" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth />
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@aresnik11" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faMedium} size="3x" fixedWidth />
                    </a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFileAlt} size="3x" fixedWidth />
                    </a>
                </li>
                <li>
                    <a href="mailto:aresnik11@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" fixedWidth />
                    </a>
                </li>
            </ul>
            

        </div>
    )
}

export default Intro