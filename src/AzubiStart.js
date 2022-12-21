import React from 'react'
import ButtonGoBack from './components/ButtonGoBack'
import ProgressBar from 'react-animated-progress-bar';
import './AzubiStart.css'
import NavbarAzubi from './components/NavbarAzubi';

function Azubi() {

  // make a starting page for the Student (Azubi) where he can see his progress in a timeline and his current tasks with the recommended courses he can take next to improve his skills and knowledge
  // the timeline should be animated and show the progress of the student from the start to the end of the college (maybe with a progress bar) 
  // make also a field where he can join group games with other students to improve his skills and knowledge

  return (
    <>
    <ButtonGoBack />
    <NavbarAzubi />
    <div className='container-azubi-start' >
      <h1>Startseite Azubi</h1>
      <div className='container-azubi-timeline' >
        <h2>Timeline</h2>
        <p>Start</p>
        <ProgressBar
        width="400px"
        height="10px"
        rect
        fontColor="gray"
        percentage="70"
        rectPadding="1px"
        rectBorderRadius="20px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
        <p>Abschlussprüfung Teil II</p>
      </div>
      <div className='container-azubi-tasks' >
        <h2>Anstehende Prüfungen</h2>
      </div>
      <div className='container-azubi-courses' >
        <h2>Empfohlene Kurse</h2>
      </div>
      <div className='container-azubi-games' >
        <h2>Gruppenspiele</h2>
      </div>
    </div>
    </>
  )
}

export default Azubi