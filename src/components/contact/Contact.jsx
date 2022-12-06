import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = ({ context, payload }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>{context.tagline}</h5>
      <h2>{context.pageName}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {payload.contact_apps.map(contact =>
            <article key={contact.id} className='contact__option'>
              {contact.icon}
              <h4>{contact.primary}</h4>
              <h6>{contact.seconday}</h6>
              <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.message}</a>
            </article>
          )}
        </div>

        {/* Contacts */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact