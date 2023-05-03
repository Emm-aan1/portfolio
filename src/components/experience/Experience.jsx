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
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="experience__details">
              <h4>REACT</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>TAILWIND</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>TYPESCRIPT</h4>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
