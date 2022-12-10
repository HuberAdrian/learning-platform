import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './../App.css'
import { HashLink } from 'react-router-hash-link';



function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
     setButton(false)
    } 
    else {
       setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  // create anchor links to the courses, pricing and about pages


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
   )
 }

 export default Navbar
 