import React from 'react'
// import image 
import gear from '.././images/gear.png'

function Navbar() {
    // create a navbar component with a logo, a login button and a signup button


  return (

    <div className='navbar' >
        <div className='logo' >
            <img src={gear} alt='logo' />
        </div>

        <div className='links' >
        <a href='home'>Startseite</a>
        <a href='about'>Kurse</a>
        <a href='Preise'>Preise</a>
        <button className='login' >Login</button>
        <button className='signup' >Registrieren</button>
        </div>
    </div>
  )
}

export default Navbar