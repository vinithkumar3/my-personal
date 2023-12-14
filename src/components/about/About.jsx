import React from 'react';
import "./about.css";
// import AboutBox from './AboutBox';
import Me from "../../assets/profile-pic.png"
import resume from "../../assets/VinithkumarG-r.pdf"

const About = () => {
  
    const handleDownload = () => {  
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'Vinithkumar.G_resume.pdf';
      link.click();
    };
  return (
    <section className="about container section" id="about">
      <h2 className="section___title">About Me</h2>
      <div className="about___container grid">
        <img src={Me} alt="" className="about___img" />
        <div className="about___data grid">
          <div className="about___info">
            <p className="about___description"> I'm Vinith Kumar, a web developer from Tamil Nadu, India. With a strong foundation in website design and customization, I excel in React. As a fresher, I'm eager to contribute my skills and enthusiasm to innovative web development projects.</p>
            <a href="" className="btn" onClick={handleDownload}>Download CV</a>
          </div>
          <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">HTML,CSS </h3>
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
                <h3 className="skills___name">JAVASCRIPT</h3>
                <span className="skills___number">80%</span>
              </div>
              <div className="skills___bar">
                <span className="skills___percentage  js___design"></span>

              </div>
            </div>
          </div> 
          <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">REACT JS</h3>
                <span className="skills___number">80%</span>
              </div>
              <div className="skills___bar">
                <span className="skills___percentage  react___design"></span>

              </div>
            </div>
          </div> 
          <div className="about___skills grid">
            <div className="skills___data">
              <div className="skills___titles">
                <h3 className="skills___name">JAVA</h3>
                <span className="skills___number">70%</span>
              </div>
              <div className="skills___bar">
                <span className="skills___percentage photography"></span>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //<AboutBox/> */}
    </section>
  )
}

export default About
