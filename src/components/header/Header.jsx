// import React from 'react'
import './header.css'
import Data from './data.js';
import CV from '../../assets/cv.pdf'
import ME from '../../assets/header.jpg'

function Header() {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ifeanyi Chidoka</h1>
        <h4 className="text-light">Fullstack Developer</h4>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div className="header__cta">
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href={CV} className='btn' download>Download CV</a>
        </div>

        <div className="header__socials">
          {
            Data.map(item => <a key={item.id} href={item.link} target='_blank'>{item.icon}</a>)
          }
        </div>

      </div>
    </header>
  )
}

export default Header