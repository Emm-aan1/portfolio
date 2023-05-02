// import React from 'react'
import './about.css'
import AboutMe from '../../assets/about.JPG'
import { TbAward } from 'react-icons/tb'
import { VscLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={AboutMe} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <VscLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>

          <p>
            As frontend developer, my primary focus is on the user interface of websites and applications. This involves working with web technologies such as HTML, CSS, and JavaScript to create appealing and user-friendly interfaces that meet the needs of clients or end-users.
          </p>
          <p>
            Additionally, I have collaborated with designers, backend developers, and other stakeholders to ensure the user experience is cohesive and effective in previous projects.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About