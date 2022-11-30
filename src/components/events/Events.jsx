import React from 'react'
import './events.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const UpcomingEvents = [
  { name : 'Hikes & Walks', eventdate : 'Short/Moderate walks breaking for a pint'},
  { name : 'Music', eventdate : 'Ardent Music lover and always listening to music'},
  { name : 'Music Genres', eventdate : 'Jazz, Blues & Rock'},
  { name : 'Cooking', eventdate : 'My taste buds are blessed !!'},
  { name : 'Gardening', eventdate : 'Gardening is therapy to me'},
  { name : 'Pub & Football', eventdate : 'What can go wrong !!'},
]

const LatestNews = [
  { name : 'Cloud', newsdate : 'Design, Develop & Architecture in Google Cloud'},
  { name : 'Application Development', newsdate : 'App development in Javascript, Java & Python'},
  { name : 'Application Modernisation', newsdate : 'Serverless , VM & Container Workoads '},
  { name : 'Infrastructure Automation', newsdate : 'Cloud Infrastructure with Terraform & Packer'},
  { name : 'Data Migration', newsdate : 'Building Data pipelines in Google Cloud'},
  { name : 'Devops', newsdate : 'Application & infrastructure CI/CD pipelines'},
]

const TechnicalSkills = [
  { name : 'Javacript Frameworks', newsdate : 'React JS, Node JS, Express JS & Next JS'},
  { name : 'J2EE Frameworks', newsdate : 'Spring Boot, Spring Cloud & Microservices'},
  { name : 'Databases', newsdate : 'MySQL, Oracle, SQLServer, PostgresSQL & MongoDB'},
  { name : 'Devops', newsdate : 'Jenkins, Nexus, Sonarqube & Vault'},
  { name : 'Scripting', newsdate : 'Bash, YAML, Groovy & Powershell'},
  { name : 'Build Frameworks', newsdate : 'Maven, Gradle, Webpack & NPM'},
]

const TechnicalSkills2 = [
  { name : 'Cloud Databases', newsdate : 'Cloud SQL, Cloud Spanner & Bigquery'},
  { name : 'Cloud Compute', newsdate : 'App Engine, GKE, GCE, Cloud Run & Functions'},
  { name : 'Cloud Data', newsdate : 'GCS, Dataflow, Dataproc & BigQuery'},
  { name : 'Cloud Security', newsdate : 'Armour, Anthos Policy Controller & Prisma Cloud'},
  { name : 'Configuration Management', newsdate : 'Ansible, Anthos Config Management'}, 
  { name : 'GitOps', newsdate : 'Git Workflow, Cloud Build, Helm & Kustomise'},
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
          <h3>I'd like to do</h3>
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
        <h3>Engineering Interests</h3>
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

        <div className="events__backend">
        <h3>Geek's world</h3>
          <div className="events__content">
                {TechnicalSkills.map(news => 
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

        <div className="events__backend">
        <h3>Cloud Corner</h3>
          <div className="events__content">
                {TechnicalSkills2.map(news => 
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