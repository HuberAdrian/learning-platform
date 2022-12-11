import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './../App.css'
import { HashLink } from 'react-router-hash-link';



function Navbar() {
  // create a navbar component with a logo and a list of links and a button
  // make a hamburger menu for mobile devices
  // make the navbar sticky
  // make the navbar transparent when the user scrolls down
  // make the navbar opaque when the user scrolls up

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

  window.addEventListener('resize', isMobile) 

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}> 
        <div className='navbar container'>
            <HashLink to='/#home' className='nav-logo' onClick={closeMobileMenu}>
              TRVL <i className='fab fa-typo3' />
            </HashLink>
        {((mobile && toggleNavbar ) || !mobile ) && (
          <ul className='nav-menu-mobile'>
            <li className='nav-item'>
              <HashLink smooth to='/#home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to='/#courses' className='nav-links' onClick={closeMobileMenu}>
                Kurse
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to='/#about' className='nav-links' onClick={closeMobileMenu} >
                Über uns
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to='/#pricing'  className='nav-links' onClick={closeMobileMenu} >
                Preise
              </HashLink>
            </li>
            <li className='nav-item nav-button'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        )}
        <div className='menu-icon' onClick={handleToggle}>
              {toggleNavbar ? <FaTimes /> : <FaBars />}
        </div>
            
        </div>
      </IconContext.Provider>
    </>
  )
}

  // create anchor links to the courses, pricing and about pages

  /*
  return (
   <>
      <IconContext.Provider value={{ color: '#fff' }}>
       <div className='navbar'>
         <div className='navbar-container container'>
           <HashLink to='/#home' className='navbar-logo' onClick={closeMobileMenu}>
             TRVL <i className='fab fa-typo3' />
           </HashLink>
           <div className='menu-icon' onClick={handleClick}>
             {click ? <FaTimes /> : <FaBars />}
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
               <HashLink smooth to='/#home' className='nav-links' onClick={closeMobileMenu}>
                 Home
               </HashLink>
             </li>
              <li className='nav-item'>
               <HashLink
                 smooth to='/#courses'
                 className='nav-links'
                 onClick={closeMobileMenu}
               >
                 Kurse
               </HashLink>
              </li>
              <li className='nav-item'>
               <HashLink
                 smooth to='/#about'
                 className='nav-links'
                 onClick={closeMobileMenu}
               >
                 Über uns
               </HashLink>
              </li>
              <li className='nav-btn'>
                {button ? (
                 <Link to='/sign-up' className='btn-link'>
                   <button buttonStyle='btn--outline'>SIGN UP</button>
                 </Link>
                 ) : (
                   <HashLink
                     to='/sign-up'
                     className='btn-link'
                     onClick={closeMobileMenu}
                   >
                     <button
                       buttonStyle='btn--outline'
                       buttonSize='btn--mobile'
                     >
                       SIGN UP
                     </button>
                   </HashLink>
                 )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
   ) */

 export default Navbar
 