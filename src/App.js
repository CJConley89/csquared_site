import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
