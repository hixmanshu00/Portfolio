import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
          <p>
            I'm <span>Himanshu Rajput, a Full-Stack Developer </span> with expertise in the 
            <span> MERN stack</span> (MongoDB, Express.js, React, Node.js). I'm also
            well-versed in <span>C++</span> and <span>Python</span>. My passion lies in crafting
            exceptional web solutions, from sleek front-end interfaces to robust
            back-end systems. I'm dedicated to turning innovative ideas into
            user-friendly web applications. <br /><span>Let's collaborate</span> on your next
            project!
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
