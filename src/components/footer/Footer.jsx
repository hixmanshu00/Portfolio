import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer-logo'>HIOWNER</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/hixmanshu00" target='_blank'><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/_hixmanshu" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/_hixmanshu" target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; HIOWNER. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
