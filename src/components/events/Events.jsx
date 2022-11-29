import React from 'react'
import './events.css'
import {BsPatchCheckFill} from 'react-icons/bs'


// const UpcomingEvents = [
//   { name : 'Javascript', eventdate : 'ReactJS, Node JS, Express JS'},
//   { name : 'Java/J2EE', eventdate : 'Spring Boot & Microservices'},
//   { name : 'Python', eventdate : 'Moderate programming experience'},
//   { name : 'Web Development', eventdate : 'CSS3, HTML5, Bootstrap CSS'},
//   { name : 'SQL', eventdate : 'Experience in Oracle SQL, MySQL & SQL Server'},
// ]

const UpcomingEvents = [
  { name : 'Hikes & Walks', eventdate : 'Short/Moderate walks breaking for a pint'},
  { name : 'Music', eventdate : 'Ardent Music lover and always have music playing in the background'},
  { name : 'Music Genres', eventdate : 'Jazz, Blues & Rock'},
  { name : 'Cooking', eventdate : 'My taste buds are blessed !!'},
  { name : 'Garden', eventdate : 'Gardening is therapy to me sometimes'},
  { name : 'Pub & Football', eventdate : 'Always happy for a drink !!'},
]

const LatestNews = [
  { name : 'Cloud', newsdate : 'Google Cloud (Pro), Azure & AWS (Basic)'},
  { name : 'Application Development', newsdate : 'Javascript, Java & Python'},
  { name : 'Infrastructure Automation', newsdate : 'Bash,Terraform, Powershell, Ansible, Chef-Inpec'},
  { name : 'Devops', newsdate : 'Gitops & Jenkins Pipelines'},
  { name : 'Soft Skills', newsdate : 'Architecture & technical pre-sales '},
]

const Events = () => {
  return (
    <section id='events'>
      <h5>sometimes i panic and think there's a crazy person in my house, then i realise it's just me !!!</h5>
      <h2>About Me</h2>
      
      {/* Listing Events */}
      <div className="container events__container">
        <div className="events__frontend">
          {/* <h3>Application Developement</h3> */}
          <h3>Hobbies</h3>
          {/* <h2>Upcoming Events</h2> */}
          {UpcomingEvents.map( upcomingEvent=> 
              <article className='events__details'>
                <BsPatchCheckFill className='events__details-icon' />
                <div>
                  <h4>{upcomingEvent.name}</h4>
                  <small className='text-light'>{upcomingEvent.eventdate} </small>
                </div>
              </article>
            )}
        </div>

        {/* Listing Latest News */}
        <div className="events__backend">
        <h3>Engineering Interest</h3>
          <div className="events__content">
                {LatestNews.map(news => 
                <article className='events__details'>
                  <BsPatchCheckFill className='events__details-icon' />
                  <div>
                    <h4>{news.name}</h4>
                    <small className='text-light'>{news.newsdate} </small>
                  </div>
                  </article>
                )}
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Events