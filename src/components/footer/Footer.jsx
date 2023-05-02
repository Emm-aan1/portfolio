// import React from 'react'
import './footer.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Ifeanyi Chidoka</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolios">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="mailto:ik.chidoka@gmail.com" target='_blank'>
          <AiOutlineMail />
        </a>
        <a href="https://api.whatsapp.com/send?phone=2349037840458" target='_blank'>
          <AiOutlineWhatsApp />
        </a>
        <a href="https://github.com/Emm-aan1" target='_blank'>
          <AiFillGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Ifeanyi Chidoka. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer