import React from 'react'
import Carousel from 'nuka-carousel';
import homepage from '../assets/set_game/set_game_homepage.png'
import board from '../assets/set_game/set_game_board.png'
import rules from '../assets/set_game/set_game_rules.png'
import scores from '../assets/set_game/set_game_scores.png'

const SetGame = (props) => {
    return (
        <div id="set-game">
            <div className="container">
                <h1>Set Game</h1>
                <ul className="view-buttons">
                    <a href="https://best-set-game.netlify.com/" target="_blank" rel="noopener noreferrer"><li>Visit Site</li></a>
                    <a href="https://github.com/aresnik11/set-game-frontend" target="_blank" rel="noopener noreferrer"><li>Frontend Code</li></a>
                    <a href="https://github.com/aresnik11/set-game-backend" target="_blank" rel="noopener noreferrer"><li>Backend Code</li></a>
                    <a href="https://youtu.be/W0tN86PVt68" target="_blank" rel="noopener noreferrer"><li>View Demo</li></a>
                </ul>
                <h3>Single page app that lets users play the game SET, verifies that selected cards are a set, and confirms a set is on the board</h3>
                <ul className="tech">
                    <li>JavaScript</li>
                    <li>Ruby on Rails</li>
                    <li>Semantic UI</li>
                    <li>CSS</li>
                    <li>Postgres</li>
                </ul>
                <Carousel
                    className="carousel"
                    wrapAround={true}
                    enableKeyboardControls={true}
                    dragging={true}
                    swiping={true}
                    width="65%"
                >
                    <img alt="homepage" src={homepage} />
                    <img alt="board" src={board} />
                    <img alt="rules" src={rules} />
                    <img alt="scores" src={scores} />
                </Carousel>
            </div>
        </div>
    )
}

export default SetGame