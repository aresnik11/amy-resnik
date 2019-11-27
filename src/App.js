import React from 'react';
import './App.css';

class App extends React.Component {
  about = React.createRef()
  techProjects = React.createRef()
  booked = React.createRef()
  setGame = React.createRef()
  plantNanny = React.createRef()
  skills = React.createRef()
  work = React.createRef()
  education = React.createRef()
  interests = React.createRef()

  moveDown = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  render() {
    return (
      <>
        <div className="teal">
          <br/><br/>
          <h1>Amy Resnik</h1>
          <h4>This site is a work in progress</h4>
          <button onClick={() => this.moveDown(this.about)}>About</button>
          <button onClick={() => this.moveDown(this.techProjects)}>Technical Projects</button>
          <button onClick={() => this.moveDown(this.booked)}>Booked</button>
          <button onClick={() => this.moveDown(this.setGame)}>Set Game</button>
          <button onClick={() => this.moveDown(this.plantNanny)}>Plant Nanny</button>
          <button onClick={() => this.moveDown(this.skills)}>Technical Skills</button>
          <button onClick={() => this.moveDown(this.work)}>Employment History</button>
          <button onClick={() => this.moveDown(this.education)}>Education</button>
          <button onClick={() => this.moveDown(this.interests)}>Interests</button>
        </div>
        <div className="tiles" ref={this.about}>
          <br/><br/>
          <h1>About</h1>
        </div>
        <div className="marble" ref={this.techProjects}>
          <br/><br/>
          <h1>Technical Projects</h1>
        </div>
        <div className="books" ref={this.booked}>
          <br/><br/>
          <h1>Booked</h1>
        </div>
        <div className="shapes" ref={this.setGame}>
          <br/><br/>
          <h1>Set Game</h1>
        </div>
        <div id="plants" className="plants" ref={this.plantNanny}>
          <br/><br/>
          <h1>Plant Nanny</h1>
        </div>
        <div className="purple" ref={this.skills}>
          <br/><br/>
          <h1>Technical Skills</h1>
        </div>
        <div className="dark-teal" ref={this.work}>
          <br/><br/>
          <h1>Employment History</h1>
        </div>
        <div className="water" ref={this.education}>
          <br/><br/>
          <h1>Education</h1>
        </div>
        <div className="pink" ref={this.interests}>
          <br/><br/>
          <h1>Interests</h1>
        </div>
      </>
    );
  }
}

export default App;
