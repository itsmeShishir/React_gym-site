import React from 'react'
import Aheader from '../Components/Aheader'
import GYMFeature from '../Components/GYMFeature'
import Testimonial from '../Components/Testimonial'
import Footer from '../Navbar/Footer'
import Sidebar from '../Navbar/Sidebar'

function OurFeature() {
  return (
    <>
        <Sidebar />
        <Aheader main="Our Feature" name="Home" page="OurFeature" />
        <GYMFeature />
        <Testimonial />
        <Footer />
    </>
  )
}

export default OurFeature
