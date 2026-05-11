// app/page.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Page = () => {
  const sectionStyle = { scrollMarginTop: '96px' };

  return (
    <>
      <Navbar />
      <div id="about" style={sectionStyle}>
        <About />
      </div>
      <div id="qualifications" style={sectionStyle}>
        <Qualifications />
      </div>
      <div id="experience" style={sectionStyle}>
        <Experience />
      </div>
      <div id="projects" style={sectionStyle}>
        <Projects />
      </div>
      <div id="contact" style={sectionStyle}>
        <Contact />
      </div>
    </>
  );
};

export default Page;
