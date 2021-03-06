import React from 'react'
import resume from '../assets/amy_resnik_resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const menuLinks = React.createRef()

    // scrolls to top on click of home button
    const scrollToTop = () => {
        hideMenu()
        window.scrollTo({
          behavior: "smooth",
          top: 0,
          left: 0
        })
    }

    // shows/hides mobile menu on click of menu icon (only visible on mobile)
    const toggleMenu = () => {
        if (menuLinks.current.style.display === "block") {
            menuLinks.current.style.display = "none";
        }
        else {
            menuLinks.current.style.display = "block";
        }
    }

    // hide mobile menu on click of any menu option
    const hideMenu = () => {
        menuLinks.current.style.display = "none";
    }

    return (
        <ul className="nav">
            <li id="left" onClick={scrollToTop}>Home</li>
            <li id="menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="2x" fixedWidth />
            </li>
            <div className="menu-links" ref={menuLinks} onClick={hideMenu}>
                <li>
                    <a href="#about">About</a>
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
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
                <li>
                    <a href="mailto:aresnik11@gmail.com">Contact</a>
                </li>
            </div>
        </ul>
    )
}

export default Nav