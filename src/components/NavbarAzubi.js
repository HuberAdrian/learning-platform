import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import gear from './../images/gear.png'

function NavbarAzubi() {

    // make a navbar for the test page that is different from the navbar on the home page 
    // include the logo and a link to home page and a link to user settings page and a link to the courses page
    // the navbar should be able to toggle and should be closed by default
    // the navbar is vertcal on mobile and desktop
    // the navbar is on the left side of the screen on desktop and on the top on mobile

    const navigate = useNavigate();

    const onClickLogo = () => {
        navigate(0);
        closeMobileMenu()
    }

    const onClickTestEnd = () => {
        navigate('/');
    }


    const [mobile, setMobile] = useState(true) 
    const [toggleNavbar, setToggleNavbar] = useState(false) // toggle the mobile menu

    const handleToggle = () => setToggleNavbar(!toggleNavbar)
    const closeMobileMenu = () => setToggleNavbar(false)   // close the mobile menu when a link is clicked

    const isMobile = () => { // check if the window is mobile
        if (window.innerWidth <= 760) {
        setMobile(true)
        } else {
        setMobile(false)
        }
    }

    // check if the window is mobile when the component is mounted
    useEffect(() => {
        isMobile()
    }, [])

    window.addEventListener('resize', isMobile) 

    return (
        <>
      <IconContext.Provider value={{ color: '#000' }}> 
        <div className='navbar'>
          <div className='nav-container'>
            <Link to='/Azubi' onClick={onClickLogo} >
              <div className='nav-logo'>
              <img src={gear} alt='logo' />
              </div>
            </Link>
        {((mobile && toggleNavbar ) || !mobile ) && (
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link className='nav-links' onClick={closeMobileMenu}>
                Start
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='courses' offset={-70} className='nav-links' onClick={closeMobileMenu}>
                Kurse
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Azubi/Einstellungen' className='nav-links' onClick={closeMobileMenu} >
                Einstellungen
              </Link>
            </li>
            <li className='nav-item nav-button' onClick={onClickTestEnd} >
              <Link to='/' className='nav-links nav-link-button' onClick={closeMobileMenu}>
                Testen beenden
              </Link>
            </li>
          </ul>
        )}
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