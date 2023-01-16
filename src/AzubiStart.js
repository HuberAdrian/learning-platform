import React, {useState} from 'react'
import ButtonGoBack from './components/ButtonGoBack'
import ProgressBar from 'react-animated-progress-bar';
import './AzubiStart.css'
import NavbarAzubi from './components/NavbarAzubi';
import CoursePreview from './components/CoursePreview';
import GamePreview from './components/GamePreview';
import Footer from './components/Footer';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Azubi() {

  // make a starting page for the Student (Azubi) where he can see his progress in a timeline and his current tasks with the recommended courses he can take next to improve his skills and knowledge
  // the timeline should be animated and show the progress of the student from the start to the end of the college (maybe with a progress bar) 
  // make also a field where he can join group games with other students to improve his skills and knowledge

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleSnackbarClick = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
    <div className='color' >
    <ButtonGoBack />
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          Function nicht verfügbar. Bitte versuchen Sie es später noch einmal.
        </Alert>
      </Snackbar>
    </Stack>
    <NavbarAzubi />
    <div className='container-azubi-start' >
      <h1>Startseite Azubi</h1>
        <h2 className='azubi-timeline-header' >Übersicht</h2>
        <div className='container-azubi-timeline' >
          <div className='azubi-timeline' >
          <ProgressBar
          width="400px"
          height="10px"
          trackWidth="13"
          percentage="83"
          className='azubi-timeline-progressbar'
          />
          <p className='azubi-timeline-progress' >...der Ausbildunng absolviert!</p>
          </div>
          <p className='azubi-timeline-start' >Ausbildungsbeginn: 09.09.2019 </p>
          <AiOutlineArrowRight className='azubi-timeline-arrow' />
          <div className='azubi-timeline-mid' >
            <p className='azubi-timeline-mid1' >Nächste Prüfung:</p>
            <p className='azubi-timeline-mid2' >Avschlussprüfung Teil II</p>
          </div>
          <AiOutlineArrowRight className='azubi-timeline-arrow' />
          <p className='azubi-timeline-end' >Ausbildungsende: 28.02.2023</p>
      </div>
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
      <div className='container-azubi-games' onClick={handleSnackbarClick} >
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