import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './../App.css'
import gear from './../images/gear.png'


/* Potential Icons for the Navbar

import Key from './../images/Key.png'
import Haus from './../images/Haus.png'
import Page from './../images/Page.png'
import Book from './../images/Book.png'
*/



function Navbar() {

  const [mobile, setMobile] = useState(true) 
  const [toggleNavbar, setToggleNavbar] = useState(false) // toggle the mobile menu

  const handleToggle = () => setToggleNavbar(!toggleNavbar)
  const closeMobileMenu = () => setToggleNavbar(false)   // close the mobile menu when a link is clicked

  const navigate = useNavigate();

  const onClickLogo = () => {
      navigate(0);
      closeMobileMenu()
    }

    const onClickTest = () => {
      navigate('/person');
  }

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
            <Link to='/' onClick={onClickLogo}>
              <div className='nav-logo'>
              <img src={gear} alt='logo' />
              </div>
            </Link>
        {((mobile && toggleNavbar ) || !mobile ) && (
          <ul className='nav-menu'>
            <li className='nav-item'>
              <LinkScroll smooth to='start' offset={-90} className='nav-links' onClick={closeMobileMenu}>
                Home
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll smooth to='courses' offset={-70} className='nav-links' onClick={closeMobileMenu}>
                Kurse
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <LinkScroll smooth to='content' className='nav-links' onClick={closeMobileMenu} >
                Inhalte
              </LinkScroll>
            </li>
            <li className='nav-item'>
              <Link to='/login'  className='nav-links' onClick={closeMobileMenu} >
                Login
              </Link>
            </li>
            <li className='nav-item nav-button' onClick={onClickTest} >
              <Link to='/person' className='nav-links nav-link-button' onClick={closeMobileMenu}>
                Testen
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
 