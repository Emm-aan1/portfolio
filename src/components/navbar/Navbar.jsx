// import React from 'react'
import './navbar.css';
// import Logo from '../../assets/logo.jpg';
import Data from './data';
// import { SiFunimation } from 'react-icons/si'


function Navbar() {
  return (
    <nav id='navbar'>
      <div className="container nav__container">
        <ul className='nav__menu'>
          {
            Data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav >
  )
}

export default Navbar