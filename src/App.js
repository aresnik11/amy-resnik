import React from 'react';
import './css/App.css';
import About from './components/About'
import Booked from './components/Booked';
import SetGame from './components/SetGame';
import PlantNanny from './components/PlantNanny';
import Skills from './components/Skills';
import Work from './components/Work';
import Intro from './components/Intro'
import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Booked />
      <SetGame />
      <PlantNanny />
      <Skills />
      <Work />
    </>
  );
}

export default App;
