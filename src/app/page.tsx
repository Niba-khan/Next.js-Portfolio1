import React from 'react'
import HeroPage from './component/hero'
import AboutMe from './about/page'
import Skills from './skills/page'
import Project from './project/page'
import Contact from './contact/page'



const page = () => {
  return (
    <div>
     
      <HeroPage/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default page