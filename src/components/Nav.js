import React from 'react'
import resume from '../assets/amy_resnik_resume.pdf'

const Nav = () => {
    const scrollToTop = () => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
          left: 0
        })
    }

    return (
        <ul className="nav">
            <li id="left" onClick={scrollToTop}>Home</li>
            <li>
                <a href="mailto:aresnik11@gmail.com">Contact</a>
            </li>
            <li>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li className="dropdown">
                <a href="#booked" className="dropbtn">Projects</a>
                <div className="dropdown-content">
                    <a href="#booked">Booked</a>
                    <a href="#set-game">Set Game</a>
                    <a href="#plant-nanny">Plant Nanny</a>
                </div>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
        </ul>
    )
}

export default Nav