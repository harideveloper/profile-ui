import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare,AiFillFacebook,AiFillInstagram,AiFillYoutube,AiFillGithub} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='SocialMedia'>
        <a href="https://www.linkedin.com/in/hariprasad-sundaresan-1bb6101b0/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/harideveloper" target="_blank"><AiFillGithub/></a> 
        <a href="https://twitter.com" target="_blank"><AiFillTwitterSquare/></a>
        <a href="https://www.facebook.com/hari.p.sundaresan" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.youtube.com/" target="_blank"><AiFillYoutube/></a>       
    </div>
  )
}

export default SocialMedia