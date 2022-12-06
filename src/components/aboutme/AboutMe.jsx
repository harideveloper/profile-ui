import React from 'react'
import './aboutme.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const AboutMe = ({ context, hobbies, skills }) => {
  return (
    <section id='aboutme'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>
      {/* hobbies */}
      <div className="container aboutme__container">
        <div className="aboutme__frontend">
          <h3>{context.title}</h3>
          {hobbies && hobbies.map(hby =>
            <article key={hby.id} className='aboutme__details'>
              <BsPatchCheckFill className='aboutme__details-icon' />
              <div>
                <h4>{hby.name}</h4>
                <small className='text-light'>{hby.hobby} </small>
              </div>
            </article>
          )}
        </div>

        {/* Sills */}
        {skills && skills.map(skill =>
          <div key={skill.title} className="aboutme__backend">
            <h3>{skill.title}</h3>
            <div className="aboutme__content">
              {skill.skillset.map(skillDetail =>
                <article key={skillDetail.name} className='aboutme__details'>
                  <BsPatchCheckFill className='aboutme__details-icon' />
                  <div>
                    <h4>{skillDetail.name}</h4>
                    <small className='text-light'>{skillDetail.desc} </small>
                  </div>
                </article>
              )}
            </div>
          </div>
        )
        }
      </div>
    </section>
  )
}

export default AboutMe