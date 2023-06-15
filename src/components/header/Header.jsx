import React from 'react'
import './header.css'
import ConnectMe from '../connect/ConnectMe'
import SocialMedia from '../socialmedia/SocialMedia'

const Header = ({ context, payload }) => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">{context.greeting}</h5>
        <h1>{context.profileName}</h1>
        <h5 className="text-light">{context.tagline}</h5>
        {/* <ConnectMe cv="{context.cv}" primary={context.primary} secondary={context.secondary} /> */}
        <ConnectMe cv="https://storage.cloud.google.com/profile-hari-bg/Hariprasad%20Sundaresan.pdf" primary={context.primary} secondary={context.secondary} />
        <SocialMedia payload={payload} />
        <div className="me">
          <img src={context.profilepic} alt="me" />
        </div>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header
