import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Courses from './Courses'
// import Pricing from './Pricing'
// import About from './About'
import Content from './Content'
import { Element } from 'react-scroll'
import problem_solving from './images/problem-solving.gif'
import { useNavigate } from 'react-router-dom'
import Person from './components/Person';


function Home() {

    const navigate = useNavigate();

    function handleTest() {
        navigate('/person')
    }

    function handleLogin() {
        navigate('/login')
    }

    return (
        <div> 
            <Navbar />
            <div id='start' className="home-container">
                <div className="home-text">
                    <div className="home-text-wrapper">
                        <h1>Industriemechaniker online lernen</h1>
                        <p>Industriemechaniker lernen mit Kursen courses, Simulationen, Tests und Spiele</p>
                        <div className="home-buttons">
                            <button onClick={handleTest} className="home-button-test">Testen</button>
                            <button onClick={handleLogin} className="home-button-login">Login</button>
                        </div>
                    </div>
                    <img className='home-image' src={problem_solving} alt="problem solving" />
                </div>
                <Element name="courses">
                    <Courses />
                </Element>
                <Person goback={false} />
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