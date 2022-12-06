import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare,AiFillFacebook,AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'
import {FiUsers,FiUmbrella,FiCoffee,FiBookOpen} from 'react-icons/fi'
import {FaAward} from 'react-icons/fa'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {TiBeer} from 'react-icons/ti'

export const navbar = [
    { name : "home", link :"/#", icon : <AiOutlineHome/>},
    { name : "aboutme", link :"#aboutme", icon : <TiBeer/>},
    { name : "projects", link :"#projects", icon : <RiServiceLine/>},
    { name : "ethics", link :"#ethics", icon : <AiOutlineUser/>},
    { name : "contact", link :"#contact", icon : <BiMessageSquareDetail/>}
]

export const socialmedia = [
    { name : "linkedIn", link :"https://www.linkedin.com/in/hariprasad-sundaresan-1bb6101b0/", icon : <BsLinkedin/>},
    { name : "github", link :"https://github.com/harideveloper", icon : <AiFillGithub/>},
    { name : "twitter", link :"https://twitter.com", icon : <AiFillTwitterSquare/>},
    { name : "facebook", link :"https://www.facebook.com/hari.p.sundaresan", icon : <AiFillFacebook/>},
    { name : "instagram", link :"https://www.instagram.com/", icon : <AiFillInstagram/>},
    { name : "youtube", link :"https://www.youtube.com/", icon : <AiFillYoutube/>},
  ];

export const ethics = [
    { id:'1', name : 'Open to discussion', desc : 'Share and seek ideas', icon:<FiBookOpen className='ethics__icon'/>},
    { id:'2',name : 'Learning Mindset ', desc : 'Best trait to not be layed off',icon:<FaAward className='ethics__icon'/>},
    { id:'3',name : 'Actively Involved', desc : 'Listening is the best trait',icon:<FiUsers className='ethics__icon'/>},
    { id:'4',name : 'Effective Planning', desc : 'Good way to avoid working on weekends',icon:<FiUmbrella className='ethics__icon'/>},
    { id:'5',name : 'Trust', desc : 'Earn the trust and the rest follows', icon:<FiCoffee className='ethics__icon'/>}
  ];

export const footer_apps = [
  { id : "1", name : "facebook", link :"https://www.facebook.com/hari.p.sundaresan", icon : <FaFacebookF/>},
  { id : "2", name : "instagram", link :"https://instagram.com", icon : <FiInstagram/>},
  { id : "3", name : "twitter", link :"https://twitter.com", icon : <IoLogoTwitter/>}
]

export const contact_apps = [
  { id : "1",
    icon : <MdOutlineEmail className='contact__option-icon'/>,
    primary : "Email",
    seconday : "hariprasad.sundharesan@gmail.com",
    link :"mailto:hariprasad.sundharesan@gmail.com", 
    message : "Send a message"
  },
  { 
    id : "2",
    icon : <RiMessengerLine className='contact__option-icon'/>,
    primary : "Messenger",
    seconday : "contact_me",
    link :"https://m.me/ernest.achiever", 
    message : "Send a message"
  },
  { 
    id : "3",
    icon :  <BsWhatsapp className='contact__option-icon'/>,
    primary : "WhatsApp",
    seconday : "07448923758",
    link :"https://api.whatsapp.com/send?phone=+919677796153", 
    message : "Send a message"
  }
]


