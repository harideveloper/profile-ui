import React from 'react'
import './ethics.css'

const Ethics = ({context,payload}) => { 
  return (
    <section id='ethics'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>

      <div className="container ethics__container">
        <div className="ethics__me">
          <div className="ethics__me-image">
            <img src={context.bg} alt="ethics__me Loading" />
          </div>
        </div>
      <div className="ethics__content">
            <div className="ethics__cards">
            {payload.ethics.map(ethic => 
                <article key={ethic.id} className='ethics__card'>
                {ethic.icon}
                <h5>{ethic.name}</h5>
                <small>{ethic.desc}</small>
                </article>
              )}
            </div>
            <p>{context.moto}</p>

            <a href="#contact" className='btn btn-primary'>{context.connect}</a>
          </div>
      </div>
    </section>
  )
}

export default Ethics