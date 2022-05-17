import React from 'react'
import AboutStart from './Components/AboutStart'
import Carousel from './Components/Carousel'
import ClassAll from './Components/ClassAll'
import Features from './Components/Features'
import GYMFeature from './Components/GYMFeature'
import Subscribe from './Components/Subscribe'
import Timetabl from './Components/Timetabl'
import Calculation from './Components/Calculation'
import Team from './Components/Team'
import Testimonial from './Components/Testimonial'
import BlogStart from './Components/BlogStart'
import Footer from './Navbar/Footer'
import Sidebar from './Navbar/Sidebar'

function Home() {
  return (
    <>
      <Sidebar />
      <Carousel />
      <ClassAll />
      <AboutStart />
      <Features />
      <GYMFeature />
      <Subscribe />
      <Timetabl />
      <Calculation />
      <Team />
      <Testimonial />
      <BlogStart />
      <Footer />
    </>
  )
}

export default Home
