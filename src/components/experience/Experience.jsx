import React from 'react'
import './experience.css'

function Experience() {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
    
            <article className="experience__details">
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
    
            <article className="experience__details">
              <h4>CSS</h4>
              <small className='text-light'>Experience</small>
            </article>
    
            <article className="experience__details">
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    
            <article className="experience__details">
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
    
            <article className="experience__details">
              <h4>ReactJs</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    
            <article className="experience__details">
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    
          </div>
        </div>

    
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
    
            <article className="experience__details">
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    
            <article className="experience__details">
              <h4>MySQL</h4>
              <small className='text-light'>Advance Beginner</small>
            </article>

            <article className="experience__details">
              <h4>NodeJs</h4>
              <small className='text-light'>Novice</small>
            </article>

            <article className="experience__details">
              <h4>MongoDB</h4>
              <small className='text-light'>Novice</small>
            </article>

            <article className="experience__details">
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
    
          </div>
        </div>
    
      </div>
    </section>
  )
}

export default Experience;