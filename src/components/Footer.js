import React from 'react'

    // create a footer component with a logo, copyright and links to login and signup pages
    // make the footer sticky to the bottom of the page
    // make the footer responsive
    // make the footer black with white text
    // make the footer have a height of 100px
    // make the footer have a width of 100%
    // make the footer have a display of flex

//import css from App.css
import './App.css';

    function Footer() {
        return (
            <div className='footer' >
                <div className='footerLogo'>logo</div>
                <div >© 2021</div>
                <div>login</div>
                <div>signup</div>
            </div>
        )
        }

    export default Footer