import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPageBody from '../components/LandingPageBody'

const LandingPage = () => {
  return (
    <div style={{width: 'inherit'}}>
        <Navbar/>
        <LandingPageBody/>
        <Footer/>
    </div>
  )
}

export default LandingPage