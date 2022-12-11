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
          <h2>Math</h2>
          <p className='courses-text' >Math is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>English</h2>
          <p className='courses-text' >English is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>Technology</h2>
          <p className='courses-text' >Technology is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>Science</h2>
          <p className='courses-text' >Science is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>History</h2>
          <p className='courses-text' >History is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>Art</h2>
          <p className='courses-text' >Art is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
        <div className='course'>
          <h2>Music</h2>
          <p className='courses-text' >Music is a collection of topics that are related to numbers, shapes, and space. It is a very important subject that is used in everyday life.</p>
        </div>
  </div>
</>
  )
}

export default Courses