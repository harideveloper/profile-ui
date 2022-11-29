import React from 'react'
import './header.css'
import Newsletter from './Newsletter'
// import HomeBG from '../../assets/g18.png'
import HomeBG from '../../assets/profile.JPEG'
import SocialMedia from './SocialMedia'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">I'm</h5>
        <h1>Haripasad Sundaresan</h1>
        <h5 className="text-light"> Cloud Consultant , Specialised in Google Cloud.
        I specialize in finanancial transactions helping them in application 
        modernisation and infrastructure Automation
       </h5>
        <Newsletter />
        <SocialMedia />
        <div className="me">
          <img src={HomeBG} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
