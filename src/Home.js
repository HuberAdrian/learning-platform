import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Courses from './Courses'
// import Pricing from './Pricing'
// import About from './About'
import Content from './Content'
import { Element } from 'react-scroll'
import problem_solving from './images/problem-solving.gif'


function Home() {

    return (
        <div> 
            <Navbar />
            <div id='start' className="home-container">
                <div className="home-text">
                    <h1>Learn Mechanical Engineering</h1>
                    <p>Learn about mechanical engineering with our courses, projects and quizzes</p>
                    <button className="home-button-test">Testen</button>
                    <button className="home-button-login">Login</button>
                    <img src={problem_solving} alt="problem solving" />
                </div>
                <div className="home-image"></div>
                <Element name="courses">
                    <Courses />
                </Element>
                <Element name="content">
                    <Content />
                </Element>
                {/* <Pricing id="pricing" />
                <About id="about" /> */}
            </div>
            <Footer/>
        </div>
    )
} 

export default Home