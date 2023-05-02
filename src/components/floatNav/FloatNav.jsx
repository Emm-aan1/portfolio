// import React from 'react'
import './floatNav.css';
import { AiFillHome } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FaNetworkWired } from 'react-icons/fa'
import { IoIosGitNetwork } from 'react-icons/io'
import { AiOutlineProject } from 'react-icons/ai'
import { AiFillContacts } from 'react-icons/ai'
import { useState } from 'react';


function FloatNav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className="float__nav">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsBook /></a>

      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaNetworkWired /></a>

      <a href="#portfolios" onClick={() => setActiveNav('#portfolios')} className={activeNav === '#portfolios' ? 'active' : ''}><AiOutlineProject /></a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts /></a>
    </div>
  )
}

export default FloatNav