import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Himanshu Rajput</h1>
        <h5 className="text-light">Fulllstack Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
            <img src={ME} alt="dp" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
