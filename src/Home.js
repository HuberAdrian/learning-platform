import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Courses from './Courses'
// import Pricing from './Pricing'
// import About from './About'
import { HashLink } from 'react-router-hash-link';
import Content from './Content'

function Home() {

    // make a landing page for a mechanical engineering learning page with a button to login and a button to signup



    return (
        <div> 
            <Navbar/>
            <div className="home-container">
                <div className="home-text">
                    <h1>Learn Mechanical Engineering</h1>
                    <p>Learn about mechanical engineering with our courses, projects and quizzes</p>
                    <button className="home-button-test">Testen</button>
                    <button className="home-button-login">Login</button>
                </div>
                <div className="home-image"></div>
                <Courses id="courses" />
                <Content id="content" />
                {/* <Pricing id="pricing" />
                <About id="about" /> */}
            </div>
            <Footer/>
        </div>
    )
} 

export default Home