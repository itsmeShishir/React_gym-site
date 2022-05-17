import React from 'react'
import Team from '../Components/Team'
import Footer from '../Navbar/Footer'
import Sidebar from '../Navbar/Sidebar'
import ClassAll from '../Components/ClassAll'
import Aheader from '../Components/Aheader'

function About() {
  return (
    <>
    
      <Sidebar />
      <Aheader name={"Home"} main={"About"} page ={"About"}/>
      <ClassAll />
      <Team />
      <Footer />
    </>
  )
}

export default About
