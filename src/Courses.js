import React from 'react'

function Courses(props) {

  // make a landing page for a collection of courses the app offers 
  // make a grid of courses
  // include math, english, technology, sience, etc.
  // make a hover effect for the courses where a detailed description is shown when the user hovers over the course
  // the last course field should show that the user can add a new course

return (<>
    <h1>Courses</h1>
    <p>Here you can find a collection of courses the app offers</p>
    <div className='courses-container' >
        <div className='course'>
          <h2>Mathe</h2>
        </div>
        <div className='course'>
          <h2>Physik</h2>
        </div>
        <div className='course'>
          <h2>Technische Kommunikation</h2>
        </div>
        <div className='course'>
          <h2>Werkstofftechnik</h2>
        </div>
        <div className='course'>
          <h2>Maschinenelemente</h2>
        </div>
        <div className='course'>
          <h2>Fertigungstechnik</h2>
        </div>
        <div className='course'>
          <h2>Automatisierungstechnik</h2>
        </div>
        <div className='course'>
          <h2>Elektrotechnik</h2>
        </div>
  </div>
</>
  )
}

export default Courses