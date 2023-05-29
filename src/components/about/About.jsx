import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';

const About = () => {
  
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = "../../assets/Vinithkumar.pdf";
      link.download = 'resume.pdf';
      link.click();
    };
  return (
    <section className="about container section" id="about">
      <h2 className="section___title">About Me</h2>
      <div className="about___container grid">
        <img src={Image} alt="" className="about___img" />
        <div className="about___data grid">
          <div className="about___info">
            <p className="about___description">I am Vinith Kumar, web developer from Tamil Nadu, India.
              I have rich experience in web site design and building and customization, also I am good at React.</p>
            <a href="" className="btn" onClick={handleDownload}>Download CV</a>
          </div>
          <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">Development </h3>
                <span className="skills___number ">90%</span>
                
              </div>
              <div className="skills___bar"> 
                <span className="skills___percentage Development"></span>

              </div>
            </div>
          </div>
           <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">UI/UX design</h3>
                <span className="skills___number">80%</span>
              </div>
              <div className="skills___bar">
                <span className="skills___percentage  ui___design"></span>

              </div>
            </div>
          </div> 
          <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">Photography</h3>
                <span className="skills___number">60%</span>
              </div>
              <div className="skills___bar">
                <span className="skills___percentage photography"></span>

              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About
