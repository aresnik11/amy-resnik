import React from 'react'
import Carousel from 'nuka-carousel';
import login from '../assets/plant_nanny/plant_nanny_login.png'
import profile from '../assets/plant_nanny/plant_nanny_profile.png'
import plants from '../assets/plant_nanny/plant_nanny_plants.png'
import plant from '../assets/plant_nanny/plant_nanny_plant.png'
import notes from '../assets/plant_nanny/plant_nanny_notes.png'

const PlantNanny = (props) => {
    return (
        <div id="plant-nanny">
            <div className="container">
                <h1>Plant Nanny</h1>
                <ul className="view-buttons">
                    <a href="https://plant-nanny.netlify.com/" target="_blank" rel="noopener noreferrer"><li>Visit Site</li></a>
                    <a href="https://github.com/aresnik11/plant-nanny-frontend" target="_blank" rel="noopener noreferrer"><li>Frontend Code</li></a>
                    <a href="https://github.com/aresnik11/plant-nanny-backend" target="_blank" rel="noopener noreferrer"><li>Backend Code</li></a>
                    <a href="https://youtu.be/mgBwnVsuJ-Q" target="_blank" rel="noopener noreferrer"><li>View Demo</li></a>
                </ul>
                <h3>A plant app for users to keep track of the plants they own and add notes about them</h3>
                <ul className="tech">
                    <li>React</li>
                    <li>Ruby on Rails</li>
                    <li>React Router</li>
                    <li>JWT</li>
                    <li>Semantic UI</li>
                    <li>CSS</li>
                    <li>Postgres</li>
                    <li>ActiveModel Serializer</li>
                </ul>
                <Carousel
                    className="carousel"
                    wrapAround={true}
                    enableKeyboardControls={true}
                    dragging={true}
                    swiping={true}
                    width="68%"
                >
                    <img alt="login" src={login} />
                    <img alt="profile" src={profile} />
                    <img alt="plants" src={plants} />
                    <img alt="plant" src={plant} />
                    <img alt="notes" src={notes} />
                </Carousel>
            </div>
        </div>
    )
}

export default PlantNanny