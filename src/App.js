import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
 
  return (
    <div>
      <Home />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
