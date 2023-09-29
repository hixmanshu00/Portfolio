import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className='about-icon'/>
                <h5>Experience</h5>
                <small>3+ years</small>
              </article>
              <article className="about-card">
                <FiUsers className='about-icon'/>
                <h5>Clients</h5>
                <small>200+ worldwide</small>
              </article>
              <article className="about-card">
                <VscFolderLibrary className='about-icon'/>
                <h5>Projects</h5>
                <small>80+ completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque nobis ea fugit non saepe aliquam autem pariatur porro est. Suscipit eos, illum nobis architecto est atque quam vitae ipsam molestiae reiciendis neque. Architecto minima fugiat, molestias adipisci reiciendis cupiditate illo saepe. Consequuntur, velit! Quaerat sed quo nisi id placeat!
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
