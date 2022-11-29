import React from 'react'
import './technolgyNews.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Managing Credentials in Terraform Cloud & Enterprise',
    vox: 'https://www.hashicorp.com/blog/managing-credentials-in-terraform-cloud-and-enterprise',
    readMore: 'https://www.hashicorp.com/blog/managing-credentials-in-terraform-cloud-and-enterprise',
    mins: '5 mins read'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cloud Finops & Governance',
    vox: 'https://cloud.google.com/files/guide-to-financial-governance.pdf',
    readMore: 'https://cloud.google.com/files/guide-to-financial-governance.pdf',
    mins: '9 mins read'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Building a data lakehouse on Google Cloud Platform',
    vox: 'https://services.google.com/fh/files/misc/building-a-data-lakehouse.pdf',
    readMore: 'https://services.google.com/fh/files/misc/building-a-data-lakehouse.pdf',
    mins: '9 mins read'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Beyond Prod Protection',
    vox: 'https://cloud.google.com/docs/security/beyondprod',
    readMore: 'https://cloud.google.com/docs/security/beyondprod',
    mins: '8 mins read'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Database Migration Strategies',
    vox: 'https://cloud.google.com/architecture/database-migration-concepts-principles-part-1',
    readMore: 'https://cloud.google.com/architecture/database-migration-concepts-principles-part-1',
    mins: '15 mins read'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Disaster Recovery Strategies',
    vox: 'https://cloud.google.com/architecture/dr-scenarios-planning-guide',
    readMore: 'https://cloud.google.com/architecture/dr-scenarios-planning-guide',
    mins: '11 mins read'
  }
]


const TechnolgyNews = () => {
  return (
    <section id='portfolio'>
      <h5>You're going to spend all day reading this, it's bound to happen </h5>
      <h2>Articles I like</h2>
      <div className="container technolgyNews__container">
        {
          data.map(({id, image, title, vox, demo, mins}) => {
            return (
              <article key={id} className='technolgyNews__item'>
              <div className="technolgyNews__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {/* <div className='tag-container'>
                <div className='tag'>
                  Data Visualisation
                  <span>x</span>
                </div>
              </div> */}
              <div className="technolgyNews__item-cta">
                <a href={vox} className='btn' target='_blank'>Read More</a>
                <a href={demo} className='btn btn-primary' target='_blank'>{mins}</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default TechnolgyNews