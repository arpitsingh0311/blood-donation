import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import WhoCanDonate from './WhoCanDonate'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <WhoCanDonate/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
