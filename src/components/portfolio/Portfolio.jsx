// import React from 'react'
import './portfolio.css'
import Data from './data.js'

function Portfolio() {
  return (
    <section id='portfolios'>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {
          Data.map(({ id, img, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__image">
                  <img src={img} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio