import React from 'react'
import './techbits.css'

const TechBits = ({context, techbits}) => {
  return (
    <section id='techbits'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>
      <div className="container technolgyNews__container">
        {
          techbits.map((techbit) => {
            return (
              <article key={techbit.id} className='technolgyNews__item'>
              <div className="technolgyNews__item-image">
                <img src={techbit.image} alt={techbit.title} />
              </div>
              <h3>{techbit.title}</h3>
              <div className="technolgyNews__item-cta">
                <a href={techbit.vox} className='btn' target='_blank' rel="noopener noreferrer">Read More</a>
                <a href={techbit.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">{techbit.mins}</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default TechBits