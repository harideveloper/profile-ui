import React from 'react'
import './nav.css'
import {useState} from 'react'


const Nav = ({payload}) => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       {payload.navbar.map(nav => (
          <a key={nav.name} href={nav.link} onClick={() => setActiveNav(nav.link)} className={activeNav === nav.link ? 'active' : ''}>{nav.icon}</a>
      ))}   
    </nav>
  )
}

export default Nav