import Header from './components/Header';
import PageFooter from './components/PageFooter';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Project from './components/Project';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <About />
      {/* <Project /> */}
      <Skills />
      <Contact />
      <PageFooter />
    </>
  );
}

export default App;
