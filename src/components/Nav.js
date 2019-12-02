import React from 'react'
import resume from '../assets/amy_resnik_resume.pdf'

const Nav = (props) => {
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


            {/* <div class="animation start-home"></div> */}
            {/* <button onClick={() => props.moveDown(props.about)}>About</button>
            <button onClick={() => props.moveDown(props.techProjects)}>Technical Projects</button>
            <button onClick={() => props.moveDown(props.booked)}>Booked</button>
            <button onClick={() => props.moveDown(props.setGame)}>Set Game</button>
            <button onClick={() => props.moveDown(props.plantNanny)}>Plant Nanny</button>
            <button onClick={() => props.moveDown(props.skills)}>Technical Skills</button>
            <button onClick={() => props.moveDown(props.work)}>Employment History</button>
            <button onClick={() => props.moveDown(props.education)}>Education</button>
            <button onClick={() => props.moveDown(props.interests)}>Interests</button> */}
        </ul>
    )
}

export default Nav