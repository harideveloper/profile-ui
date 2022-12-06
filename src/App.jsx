import React from 'react'
import { useState, useEffect } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import AboutMe from './components/aboutme/AboutMe'
import Projects from './components/projects/Projects'
import Ethics from './components/ethics/Ethics'
import TechBits from './components/tech/TechBits'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Content from './data/profile.json';
import * as Constant from './data/constants.js';


const App = () => {

  // Page Contexts
  const [head, setHead] = useState([]);
  const [aboutme, setAboutme] = useState([]);
  const [project, setProject] = useState([]);
  const [ethics, setEthics] = useState([]);
  const [contact, setContact] = useState([]);
  const [footer, setFooter] = useState([]);

  // Content
  const [hobbies, setHobbies] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tech, setTech] = useState([]);
  const [articles, setArticles] = useState([]);
  const [footlinks, setFootlinks] = useState([]);


  useEffect(() => {
    const getContent = () => {
      // Page Context
      setHead(Content.header[0])
      setAboutme(Content.aboutMe[0])
      setProject(Content.project[0])
      setEthics(Content.ethics[0])
      setArticles(Content.articles[0])
      setContact(Content.contact[0])
      setFooter(Content.footer[0])

      // Content
      setHobbies(Content.hobbies)
      setSkills(Content.skills)
      setProjects(Content.projects)
      setTech(Content.tech)
      setFootlinks(Content.footlinks)

    }
    getContent()
  }, [])


  /* Retrieving from Cloud Storage API
  useEffect(() => {
    const getContent = async () => {
      const contents = await loadContent();
      setContent(contents)
    }
    getContent()
  }, [])

  const loadContent = async () => {
      const API = "https://storage.googleapis.com/profile-12345/data/profile.json"
      const res = await fetch(API, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }
    )
    const response = await res.json();
    console.log(response)    
    return response; 
  }
  */

  return (
    <>
      <Header context={head} payload={Constant} />
      <Nav payload={Constant} />
      <AboutMe context={aboutme} hobbies={hobbies} skills={skills} />
      <Projects context={project} projects={projects} />
      <Ethics context={ethics} payload={Constant} />
      <TechBits context={articles} techbits={tech} />
      <Contact context={contact} payload={Constant} />
      <Footer context={footer} footlinks={footlinks} payload={Constant} />
    </>
  )
}

export default App