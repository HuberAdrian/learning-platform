import React from 'react'

// create a function called About that returns an about page with a h1 tag that says "About Us" and a p tag that says "We are a team of mechanical engineers that are here to help you learn about mechanical engineering" and a picture of a mechanical engineer and a button that says "Learn More" and a button that says "Sign up"
function About() {
    return (
        <div>
        <h1>About Us</h1>
        <p>We are a team of mechanical engineers that are here to help you learn about mechanical engineering</p>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F313421892", alt="mechanical engineer" />
        <button>Learn More</button>
        <button>Sign up</button>
        </div>
    )
}

export default About
