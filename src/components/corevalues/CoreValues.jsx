import React from 'react'
import './corevalues.css'
import CoreVS_Img from '../../assets/CoreVS_Img.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers,FiUmbrella,FiCoffee,FiBookOpen} from 'react-icons/fi'

const coreValues = [
  {coreValue : 'Open to discussion', core_value_desc : 'Share and seek ideas', icon:<FiBookOpen className='corevalues__icon'/>},
  {coreValue : 'Learning Mindset ', core_value_desc : 'Best trait to not be layed off',icon:<FaAward className='corevalues__icon'/>},
  {coreValue : 'Actively Involved', core_value_desc : 'Listening is the best trait',icon:<FiUsers className='corevalues__icon'/>},
  {coreValue : 'Effective Planning', core_value_desc : 'Good way to avoid working on weekends',icon:<FiUmbrella className='corevalues__icon'/>},
  {coreValue : 'Trust', core_value_desc : 'Earn the trust and the rest follows', icon:<FiCoffee className='corevalues__icon'/>}
]

const coreMessage = {message : 'Whatever i do, i always give 100% unless it is donating blood !!'}

const CoreValues = () => {
  return (
    <section id='CoreValues'>
      <h5>Well I try to follow some of them !!!</h5>
      <h2>About My Key Ethics</h2>

      <div className="container corevalues__container">
        <div className="corevalues__me">
          <div className="corevalues__me-image">
            <img src={CoreVS_Img} alt="corevalues__me Image" />
          </div>
        </div>
    
    <div className="corevalues__content">
          <div className="corevalues__cards">
           {coreValues.map(item => 
              <article className='corevalues__card'>
              {item.icon }
              <h5>{item.coreValue}</h5>
              <small>{item.core_value_desc}</small>
              </article>
            )}
          </div>
          <p>{coreMessage.message}</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default CoreValues