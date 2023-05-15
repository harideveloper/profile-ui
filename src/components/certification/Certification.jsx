import React from 'react'
import './certification.css'

const Certification = ({context,payload}) => { 
  return (
    <section id='certification'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>

      <div className="container certification__container">
      <div className="certification__content">
            <div className="certification__cards">
            {payload.certification.map(cert => 
                <article key={cert.id} className='certification__card'>
                <a href={cert.creds} key={cert.id} target="_blank" rel="noopener noreferrer"><h6>{cert.name}</h6></a>
                </article>
              )}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Certification