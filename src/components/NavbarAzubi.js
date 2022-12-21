import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import gear from './../images/gear.png'

function NavbarAzubi() {

    // make a navbar for the test page that is different from the navbar on the home page 
    // include the logo and a link to home page and a link to user settings page and a link to the courses page
    // the navbar should be able to toggle and should be closed by default
    // the navbar is vertcal on mobile and desktop
    // the navbar is on the left side of the screen on desktop and on the top on mobile

    const [toggleNavbar, setToggleNavbar] = useState(false) // toggle menu

    const handleToggle = () => setToggleNavbar(!toggleNavbar)
    const closeMobileMenu = () => setToggleNavbar(false)   // close the menu when a link is clicked

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className='navbar'>
                    <div className='nav-container'>
                        <Link to='/' className='nav-logo' onClick={closeMobileMenu} >
                            <img src={gear} alt></img>
                        </Link>
                        <Link to='/settings' className='nav-links' onClick={closeMobileMenu} >
                            Settings
                        </Link>
                        <Link to='/courses' className='nav-links' onClick={closeMobileMenu} >
                            Courses
                        </Link>
                        <div className='menu-icon' onClick={handleToggle}>
                            {toggleNavbar ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default NavbarAzubi