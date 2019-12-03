import React from 'react'

const Skills = (props) => {
    return (
        <div id="skills">
            <div className="container">
                <h1>Technical Skills</h1>
                <div className="skills-grid">
                    <div>
                        <h2>Languages</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>Ruby</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Frameworks</h2>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Ruby on Rails</li>
                            <li>Semantic UI</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Tools</h2>
                        <ul>
                            <li>Git &amp; GitHub</li>
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                            <li>Chrome DevTools</li>
                            <li>Postman</li>
                            <li>Jira</li>
                            <li>Wrike</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills