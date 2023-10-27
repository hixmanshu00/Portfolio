import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href="https://www.linkedin.com/in/hixmanshu00" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/hixmanshu00" target='_blank'><FaGithub /></a>
      <a href="https://www.instagram.com/_hixmanshu" target='_blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
