import React from 'react'
import ButtonGoBack from './components/ButtonGoBack'

function Azubi() {

  // make a starting page for the Student (Azubi) where he can see his progress in a timeline and his current tasks with the recommended courses he can take next to improve his skills and knowledge
  // the timeline should be animated and show the progress of the student from the start to the end of the college (maybe with a progress bar) 
  // make also a field where he can join group games with other students to improve his skills and knowledge

  return (
    <>
    <ButtonGoBack />
    <div className='container-start' >
      <h1>Startseite Azubi</h1>
      <div className='container-timeline' >
        <h2>Timeline</h2>
      </div>
      <div className='container-tasks' >
        <h2>Anstehende Prüfungen</h2>
      </div>
      <div className='container-courses' >
        <h2>Empfohlene Kurse</h2>
      </div>
      <div className='container-games' >
        <h2>Gruppenspiele</h2>
      </div>
    </div>
    </>
  )
}

export default Azubi