import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Courses from './Courses'
import Pricing from './Pricing'
import About from './About'
import { HashLink } from 'react-router-hash-link';
import Content from './Content'

function Home() {

    // make a landing page for a mechanical engineering learning page with a button to login and a button to signup



    return (
        <div> 
            <Navbar/>
            <div className="home-container">
                <div className="home__text">
                    <h1>Learn Mechanical Engineering</h1>
                    <p>Learn about mechanical engineering with our courses, projects and quizzes</p>
                    <button className="home__button">Sign Up</button>
                </div>
                <div className="home__image"></div>
            <Content id="content" />
            <Courses id="courses" />
            <Pricing id="pricing" />
            <About id="about" />
            <Footer/>
            </div>
        </div>
    )
} 

export default Home