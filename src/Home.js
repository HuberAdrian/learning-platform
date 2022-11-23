import React from 'react'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import Courses from './Courses'
import Pricing from './Pricing'
import About from './About'

function Home() {

    // make a landing page for a mechanical engineering learning page with a button to login and a button to signup
 
  return (
    <>
      {/* <Navbar /> */}
      <div className="home">

      </div>
      <Courses />
      <Pricing />
      <About />
      <Footer />
    </>
  )
} 

export default Home