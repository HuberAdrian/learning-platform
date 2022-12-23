import React from 'react'
import ButtonGoBack from './components/ButtonGoBack'
import ProgressBar from 'react-animated-progress-bar';
import './AzubiStart.css'
import NavbarAzubi from './components/NavbarAzubi';
import CoursePreview from './components/CoursePreview';
import GamePreview from './components/GamePreview';
import Footer from './components/Footer';

function Azubi() {

  // make a starting page for the Student (Azubi) where he can see his progress in a timeline and his current tasks with the recommended courses he can take next to improve his skills and knowledge
  // the timeline should be animated and show the progress of the student from the start to the end of the college (maybe with a progress bar) 
  // make also a field where he can join group games with other students to improve his skills and knowledge

  return (
    <>
    <div className='color' >
    <ButtonGoBack />
    <NavbarAzubi />
    <div className='container-azubi-start' >
      <h1>Startseite Azubi</h1>
        <h2 className='azubi-timeline-header' >Timeline</h2>
        <div className='container-azubi-timeline' >
          <p className='azubi-timeline-start' >Start </p>
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
          className='azubi-timeline-progressbar'
          />
          <p className='azubi-timeline-end' >Abschlussprüfung Teil II</p>
      </div>
      <h2>Anstehende Prüfungen</h2>
      <div className='container-azubi-tasks' >
      </div>
      <h2>Empfohlene Kurse</h2>
      <p>Für deine nächste Prüfung</p>
      <div className='container-azubi-courses' >
        <CoursePreview />
        <CoursePreview />
        <CoursePreview />
        <CoursePreview />
      </div>
      <h2>Gruppenspiele</h2>
      <div className='container-azubi-games' >
        <GamePreview />
        <GamePreview />
      </div>
      <h2>Sonstige Kurse</h2>
      <p>Eine Auswahl an Kursen</p>
      <div className='container-azubi-courses' >
        <CoursePreview link='/KursBsp1' />
        <CoursePreview />
        <CoursePreview />
        <CoursePreview />
        <CoursePreview />
        </div>
    </div>
    <Footer />
    </div>
    </>
  )
}

export default Azubi