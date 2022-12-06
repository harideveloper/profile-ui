import React from 'react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import './reviews.css'
import PS1 from '../../assets/persona/persona1.jpg'
import PS2 from '../../assets/persona/persona2.jpg'
import PS3 from '../../assets/persona/persona3.jpg'
import PS4 from '../../assets/persona/persona4.jpg'

const data = [
  {
    avatar: PS1,
    name: 'Jorge Lorenzo',
    review: 'I started out as an intern at Publicis Sapient during the pandemic and immediately felt welcomed throughout the entire office. Upon Graduating, i found myself in my first full-time opportunity working with an amazing company, doing something i enjoy, and progressing my career professionally and personally.'
  },
  {
    avatar: PS2,
    name: 'Suzanne Taylor',
    review: 'I re-joined Sapient after my maternity leave in September 2020 and received great support from my People Manager. Some of the things that I really appreciated was the check-in before my return to work to make sure that I was on an account that was steady and could be a good way to transition back to work, the regular check-ins to ensure that the workload was manageable and recommending resources for parents. All these things helped me to feel really good about my return to work.'
  },
  {
    avatar: PS3,
    name: 'Helen Doherty',
    review: 'My time with Sapient has been a crucial stepping stone in my career. The company culture was inviting and encouraging of fine tuning my skillset and continuous learning. Since the start of my employment I have grown as a Product Manager and worked with cutting edge clients looking to push and challenge the status quo. I look forward to coming to work to continue the brave pursuit of next!'
  },
  {
    avatar: PS4,
    name: 'Angela Stuart',
    review: 'I entered Publicis Sapient’s Early Careers program as my first job out of college.  Publicis Sapient invested so much in my development not only as a designer, but also as a person.  I had great mentors on my team to learn from, and a community in Early Careers that made it fun to go to the office.  Best of all, the work I did at Publicis Sapient made a tangible difference in people’s lives.  For all these reasons, I am grateful that my career started at Publicis Sapient.'
  },
]


const Reviews = () => {
  return (
    <section id='reviews'>
      <h5>feedback for me</h5>
      <h2>reviews</h2>
      <Swiper className="container reviews__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="reviews">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Reviews