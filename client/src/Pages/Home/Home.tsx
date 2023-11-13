import React from 'react'
import Navbar from '../../HomeComponents/Navbar'
import Hero from '../../HomeComponents/Hero'
import Stepper from '../../HomeComponents/Stepper'
import About from '../../HomeComponents/About'
import WhyChooseUs from '../../HomeComponents/WhyChooseUs'
import SubFooter from '../../HomeComponents/SubFooter'

const Home = () => {
  return (
    <>
        <Navbar />
      <Hero />
      <div className="flex flex-col sm:flex-row">
        <Stepper />
        <About />
      </div>
      <WhyChooseUs />
      <SubFooter></SubFooter>
    </>
  )
}

export default Home