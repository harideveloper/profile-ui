import React from 'react'
import './projects.css'
import {BiCheck} from 'react-icons/bi'

const Projects = ({context,projects}) => { 
  return (
    <section id='projects'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>
  
      <div className="container projects__container">
      {projects && projects.map(proj =>
        <article key={proj.type} className="projects">
        <div className="projects__head">
          <h3>{proj.type}</h3>
        </div>
          <ul className='projects__list'>
            {proj.project.map(project => 
              <li key={project.id} >
                <BiCheck className='projects__list-icon' />
                <p>{project.name}</p>
              </li>
              )}
          </ul>
        </article>
      )}
      </div>
    </section>
  )
}

export default Projects