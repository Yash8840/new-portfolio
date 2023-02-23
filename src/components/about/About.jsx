import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import  { useParallax } from 'react-scroll-parallax'

const About = () => {
  const parallax = useParallax({speed : -10});
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div ref={parallax.ref}  className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Still Learning..</small>
            </article>
            
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>{"You can be one. Reach out to me below :)"}</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Innovative Front End Developer with keen interest in building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, jQuery, JavaScript and React; plus modern libraries and frameworks.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;