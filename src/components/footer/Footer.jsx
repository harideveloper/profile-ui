import React from 'react'
import './footer.css'

const Footer = ({context,footlinks,payload}) => {
  return (
    <footer>
      <a href={context.link} className='footer__logo'>{context.pageName}</a>
      <ul className='permalinks'>
        {footlinks.map((footnav) => 
          <li key={footnav.name}><a href={footnav.link}>{footnav.name}</a></li>
        )}
      </ul>
      <div className="footer__socials">
          {payload.footer_apps.map(apps => 
            <a href={apps.link} key={apps.id}>{apps.icon}</a>
          )}
      </div>
      <div className="footer__copyright">
        <small>{context.tagline}</small>
      </div>
    </footer>
  )
}

export default Footer