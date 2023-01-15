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
        <h2 className='azubi-timeline-header' >Übersicht</h2>
        <div className='container-azubi-timeline' >
          <ProgressBar
          width="400px"
          height="10px"
          trackWidth="13"
          percentage="83"
          className='azubi-timeline-progressbar'
          />
          <p className='azubi-timeline-start' >Ausbildungsbeginn: 09.09.2019 </p>
          <p className='azubi-timeline-end' >Nächste Prüfung: Abschlussprüfung Teil II</p>
          <p className='azubi-timeline-end' >Ausbildungsende: 28.02.2023</p>
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