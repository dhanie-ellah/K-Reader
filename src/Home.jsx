import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Trending from './Components/Trending'
import ComingSoon from './Components/ComingSoon'
import NewCategory from './Components/NewCategory'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Trending/>
      <ComingSoon />
      <NewCategory/>
      <Footer/>
    </div>
  )
}

export default Home